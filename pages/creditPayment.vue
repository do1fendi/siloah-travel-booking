<template>
  <div class="tappay">
    <b-form @submit="onSubmit">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="Email"
        />
      </div>
      <div class="form-group card-number-group">
        <label for="card-number" class="control-label"
          ><span id="cardtype"></span>卡號</label
        >
        <div class="form-control card-number"></div>
      </div>
      <div class="form-group expiration-date-group">
        <label for="expiration-date" class="control-label">卡片到期日</label>
        <div
          class="form-control expiration-date"
          id="tappay-expiration-date"
        ></div>
      </div>
      <div class="form-group cvc-group">
        <label for="cvc" class="control-label">卡片後三碼</label>
        <div class="form-control cvc"></div>
      </div>
      <b-col class="text-right pr-0">
        <b-button type="submit" variant="warning">Pay</b-button>
      </b-col>
    </b-form>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'payment',
      script: [
        {
          hid: 'tappay',
          src: 'https://js.tappaysdk.com/tpdirect/v5.1.0',
          defer: true,
        },
        {
          src: 'https://code.jquery.com/jquery-3.2.1.min.js',
        },
      ],
    }
  },
  middleware({ store, redirect }) {
    // if (!store.state.form.formValidity) {
    //   return redirect('/')
    // }
  },
  mounted() {
    this.$nextTick(() => {
      TPDirect.setupSDK(
        16793,
        'app_zCImCZAJruKAPRC2nKemqebjVbDX2GAx9MFtuylDGcfyFFHOEZnAiej4UmKT',
        'sandbox'
      )

      TPDirect.card.setup({
        fields: {
          number: {
            element: '.form-control.card-number',
            placeholder: '**** **** **** ****',
          },
          expirationDate: {
            element: document.getElementById('tappay-expiration-date'),
            placeholder: 'MM / YY',
          },
          ccv: {
            element: $('.form-control.cvc')[0],
            placeholder: '後三碼',
          },
        },
        styles: {
          input: {
            color: 'gray',
          },
          'input.ccv': {
            // 'font-size': '16px'
          },
          ':focus': {
            color: 'black',
          },
          '.valid': {
            color: 'green',
          },
          '.invalid': {
            color: 'red',
          },
          '@media screen and (max-width: 400px)': {
            input: {
              color: 'orange',
            },
          },
        },
      })

      // listen for TapPay Field
      TPDirect.card.onUpdate(function (update) {
        /* Disable / enable submit button depend on update.canGetPrime  */
        /* ============================================================ */

        // update.canGetPrime === true
        //     --> you can call TPDirect.card.getPrime()
        // const submitButton = document.querySelector('button[type="submit"]')
        if (update.canGetPrime) {
          // submitButton.removeAttribute('disabled')
          $('button[type="submit"]').removeAttr('disabled')
        } else {
          // submitButton.setAttribute('disabled', true)
          $('button[type="submit"]').attr('disabled', true)
        }

        /* Change card type display when card type change */
        /* ============================================== */

        // cardTypes = ['visa', 'mastercard', ...]
        var newType = update.cardType === 'unknown' ? '' : update.cardType
        $('#cardtype').text(newType)

        /* Change form-group style when tappay field status change */
        /* ======================================================= */

        // number 欄位是錯誤的
        if (update.status.number === 2) {
          setNumberFormGroupToError('.card-number-group')
        } else if (update.status.number === 0) {
          setNumberFormGroupToSuccess('.card-number-group')
        } else {
          setNumberFormGroupToNormal('.card-number-group')
        }

        if (update.status.expiry === 2) {
          setNumberFormGroupToError('.expiration-date-group')
        } else if (update.status.expiry === 0) {
          setNumberFormGroupToSuccess('.expiration-date-group')
        } else {
          setNumberFormGroupToNormal('.expiration-date-group')
        }

        if (update.status.cvc === 2) {
          setNumberFormGroupToError('.cvc-group')
        } else if (update.status.cvc === 0) {
          setNumberFormGroupToSuccess('.cvc-group')
        } else {
          setNumberFormGroupToNormal('.cvc-group')
        }
      })
      function setNumberFormGroupToError(selector) {
        $(selector).addClass('has-error')
        $(selector).removeClass('has-success')
      }

      function setNumberFormGroupToSuccess(selector) {
        $(selector).removeClass('has-error')
        $(selector).addClass('has-success')
      }

      function setNumberFormGroupToNormal(selector) {
        $(selector).removeClass('has-error')
        $(selector).removeClass('has-success')
      }

      function forceBlurIos() {
        if (!isIos()) {
          return
        }
        var input = document.createElement('input')
        input.setAttribute('type', 'text')
        // Insert to active element to ensure scroll lands somewhere relevant
        document.activeElement.prepend(input)
        input.focus()
        input.parentNode.removeChild(input)
      }

      function isIos() {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
      }
    })
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()
      const tappayStatus = TPDirect.card.getTappayFieldsStatus()
      console.log(tappayStatus)
      // Check TPDirect.card.getTappayFieldsStatus().canGetPrime before TPDirect.card.getPrime
      if (tappayStatus.canGetPrime === false) {
        alert('can not get prime')
        return
      }
      TPDirect.card.getPrime(function (result) {
        if (result.status !== 0) {
          alert('get prime error ' + result.msg)
          return
        }
        alert('get prime 成功，prime: ' + result.card.prime)

        if (result.card.prime) {
          const data = JSON.stringify({
            // partner_key:
            //   'partner_pvljbo0HnJHaFAwlIyjlss9itobWuYF8bgu4py4HcRUHUGvwSPRzgaSs',
            prime: `${result.card.prime}`,
            amount: '1',
            merchant_id: 'siloah_CTBC',
            details: 'Some item',
            cardholder: {
              phone_number: '+886923456789',
              name: '王小明',
              email: 'LittleMing@Wang.com',
              zip_code: '100',
              address: '台北市天龍區芝麻街1號1樓',
              national_id: 'A123456789',
            },
          })
          fetch('http://localhost/tappayPay/credit.php',{
              method: 'post',
              // headers:{
              //   'Content-Type': 'application/json'
              // },
              body: data
          })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((error) => {
              console.error('Error:', error)
            })
        }
      })
    },

    // doPayment(prime) {
    //   const config = {
    //     method: 'POST',
    //     url: 'https://sandbox.tappaysdk.com/tpc/payment/pay-by-prime',
    //     headers: {
    //       'content-type': 'application/json',
    //       'x-api-key':
    //         'partner_pvljbo0HnJHaFAwlIyjlss9itobWuYF8bgu4py4HcRUHUGvwSPRzgaSs',
    //     },
    //     data: {
    //       partner_key:
    //         'partner_pvljbo0HnJHaFAwlIyjlss9itobWuYF8bgu4py4HcRUHUGvwSPRzgaSs',
    //       prime: `${prime}`,
    //       amount: '1',
    //       merchant_id: 'siloah_CTBC',
    //       details: 'Some item',
    //       cardholder: {
    //         phone_number: '+886923456789',
    //         name: '王小明',
    //         email: 'LittleMing@Wang.com',
    //         zip_code: '100',
    //         address: '台北市天龍區芝麻街1號1樓',
    //         national_id: 'A123456789',
    //       },
    //     },
    //   }(async () => {
    //     const res = await this.$axios(config)
    //     const data = await res.data.response
    //     console.log(data)
    //   })()
    // },
  },
}
</script>

<style scoped>
.tappay {
  width: 70%;
  margin: auto;
}
</style>