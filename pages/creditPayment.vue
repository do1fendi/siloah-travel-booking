<template>
  <div class="tappay">
    <b-form @submit="onSubmit">
      <b-col class="pl-0 pr-0">
        <label for="exampleInputEmail1">Email address</label>
        <b-form-input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="Email"
          v-model="tappayData.cardholder.email"
          :state="valEmailState"
          ref="em"
        />
      </b-col>
      <b-col class="mt-3 pl-0 pr-0">
        <label for="exampleInputName">Card Holder Name</label>
        <b-form-input
          type="text"
          class="form-control"
          id="exampleInputName"
          placeholder="Card Holder Name"
          v-model="tappayData.cardholder.name"
          :state="valNameState"
          ref="nm"
        />
      </b-col>
      <b-col class="mt-3 pl-0 pr-0">
        <label for="contactNumber">Contact Number</label>
        <b-form-input
          type="text"
          class="form-control"
          id="contactNumber"
          placeholder="Contact Number"
          v-model="tappayData.cardholder.phone_number"
          :state="valPhoneState"
          ref="ph"
        />
      </b-col>

      <b-col class="card-number-group mt-3 pl-0 pr-0">
        <label for="card-number" class="control-label"
          ><span id="cardtype"></span>卡號</label
        >
        <div class="form-control card-number"></div>
      </b-col>

      <b-col class="expiration-date-group mt-3 pl-0 pr-0">
        <label for="expiration-date" class="control-label">卡片到期日</label>
        <div
          class="form-control expiration-date"
          id="tappay-expiration-date"
        ></div>
      </b-col>

      <b-col class="form-group cvc-group mt-3 pl-0 pr-0">
        <label for="cvc" class="control-label">卡片後三碼</label>
        <div class="form-control cvc"></div>
      </b-col>
      <div class="amt mt-4">
        <h4>Total Amount: {{ tappayData.amount }} NTD</h4>
      </div>
      <b-col class="text-center pr-0 mt-4">
        <b-button type="submit" variant="warning" class="pl-5 pr-5"
          >Pay</b-button
        >
      </b-col>
    </b-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  head() {
    return {
      title: 'Payment',
    }
  },
  data() {
    return {
      tappayData: {
        prime: '',
        amount: 0,
        merchant_id: 'siloah_CTBC',
        details: '',
        cardholder: {
          phone_number: '',
          name: '',
          email: '',
          // zip_code: '100',
          // address: '台北市天龍區芝麻街1號1樓',
          // national_id: 'A123456789',
        },
      },
    }
  },
  computed: {
    ...mapGetters('form', ['GET_FORM']),
    ...mapGetters(['GET_GROUPNUMBER']),
    // getEmail: function () {
    //   return this.GET_FORM.regEmail
    // },
    // getName: function () {
    //   return this.GET_FORM.regLastname + this.GET_FORM.regFirstname
    // },
    // getAmt: function () {
    //   return this.GET_FORM.regTotalPrice
    // },
    // getPhone: function () {
    //   return this.GET_FORM.regPhoneCode + this.GET_FORM.regPhoneNumber
    // },
    valEmailState() {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(this.tappayData.cardholder.email)
    },
    valNameState() {
      return this.tappayData.cardholder.name.length >= 2
    },
    valPhoneState() {
      return this.tappayData.cardholder.phone_number.length >= 6
    },
  },
  mounted() {
    //initial tappayData
    this.tappayData.details = this.GET_GROUPNUMBER
    this.tappayData.cardholder.phone_number =
      this.GET_FORM.regPhoneCode + this.GET_FORM.regPhoneNumber
    this.tappayData.cardholder.name =
      this.GET_FORM.regLastname + this.GET_FORM.regFirstname
    this.tappayData.cardholder.email = this.GET_FORM.regEmail
    this.tappayData.amount = this.GET_FORM.regTotalPrice

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
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()

      if (!this.valEmailState) {
        this.$refs.em.$el.focus()
      } else if (!this.valNameState) {
        this.$refs.nm.$el.focus()
      } else if (!this.valPhoneState) {
        this.$refs.ph.$el.focus()
      } else {
        const tappayStatus = TPDirect.card.getTappayFieldsStatus()
        // console.log(tappayStatus)
        // Check TPDirect.card.getTappayFieldsStatus().canGetPrime before TPDirect.card.getPrime
        if (tappayStatus.canGetPrime === false) {
          alert('can not get prime')
          return
        }
        TPDirect.card.getPrime((result) => {
          if (result.status !== 0) {
            alert('get prime error ' + result.msg)
            return
          }
          // alert('get prime 成功，prime: ' + result.card.prime)
          // this.tappayData.prime = result.card.prime

          if (result.card.prime) {
            // set tappay data
            this.tappayData.prime = result.card.prime

            const data = JSON.stringify(this.tappayData)
            fetch('http://localhost/tappayPay/credit.php', {
              method: 'post',
              body: data,
            })
              .then((res) => res.json())
              .then(function (data) {
                const jsonData = JSON.parse(data)
                if(jsonData.status === 0) $nuxt.$router.push('thank')
              })
              .catch((error) => {
                console.error('Error:', error)
              })
          }

         
        })
      }
    },

    // thank(jsonData){
    //   if (jsonData.status === 0) this.$router.push('thank')
    // }
  },
}
</script>

<style scoped>
.tappay {
  width: 70%;
  margin: auto;
}
</style>