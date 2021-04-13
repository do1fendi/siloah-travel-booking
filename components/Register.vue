<template>
  <div class="register p-2 mb-2">
    <div class="mb-3 text-center">
      <h4>訂購人</h4>
    </div>
    
    <!-- <b-form @submit="onSubmit"> -->
    <b-form @submit="onSubmit" class="form">
      <b-col class="">
        <b-form-input
          :class="setFieldBorder"
          v-model="regLastname"
          :state="valRegLNState"
          placeholder="Enter your Last name / 姓氏"
          required
          ref="ln"
        ></b-form-input>
      </b-col>
      <b-col class="mt-2">
        <b-form-input
          :class="setFieldBorder"
          v-model="regFirstname"
          :state="valRegFNState"
          placeholder="Enter your first name / 名字"
          required
          ref="fn"
        ></b-form-input>
      </b-col>

      <b-col class="mt-2">
        <b-form-input
          :class="setFieldBorder"
          v-model="regEmail"
          :state="valRegEmailState"
          type="email"
          placeholder="Email"
          required
          ref="email"
        ></b-form-input>
      </b-col>

      <b-col class="mt-2">
        <b-form-select v-model="regPhoneCode" :options="phoneCode">
        </b-form-select>
      </b-col>
      <b-col class="mt-2">
        <b-form-input
          :class="setFieldBorder"
          v-model="regPhoneNumber"
          type="number"
          :state="valRegPhoneNumberState"
          placeholder="Phone Number 聯絡電話"
          required
          ref="phone"
        >
        </b-form-input>
      </b-col>

      <b-col class="mt-2">
        <b-form-select v-model="regCountry" :options="country"></b-form-select>
      </b-col>
      <b-col class="mt-2">
        <b-form-input
          :class="setFieldBorder"
          v-model="regAddress"
          placeholder="Enter Address 地址"
          :state="valRegAddressState"
          required
          ref="address"
        ></b-form-input>
      </b-col>

      <div class="mt-2 text-right">
        <h6>
          <b-badge
            class="showAgreement"
            variant="danger"
            @click="showAgreementModal"
            small
            >Show Agreement</b-badge
          >
        </h6>
      </div>

      
    </b-form>
    <Traveler />
    <h5 class="mt-4">Total Price: {{ totalPrice }}</h5>
    <div>
     
    </div>
    <div class="submit">
      <div class="text-center mt-2">
        <b-button @click="onSubmit" variant="warning"><h6>Submit</h6></b-button>
      </div>
    </div>
    <!-- {{form}} -->
    <Agreement ref="childAgreement" />
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import Agreement from '../components/Agreement.vue'
import Traveler from '../components/Traveler.vue'

export default {
  components: {
    Agreement,
    Traveler,
  },
  computed: {
    ...mapMutations('form', ['SET_REGFORM', 'SET_FORMVALIDITY', 'SET_TOTALPRICE']),
    ...mapGetters('country', ['GET_COUNTRY', 'GET_PHONECODE']),
    ...mapGetters('form', ['GET_FORM', 'GET_TRAVELERNUMBER', 'GET_FORMVALIDITY', 'GET_TRAVELER']),
    travelerCount: function () {
      return this.GET_TRAVELERNUMBER
    },
    valRegLNState() {
      return this.GET_FORM.regLastname.length >= 1
    },
    valRegFNState() {
      return this.GET_FORM.regFirstname.length >= 1
    },
    valRegEmailState() {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(this.GET_FORM.regEmail.toLowerCase())
    },
    valRegPhoneNumberState() {
      return this.GET_FORM.regPhoneNumber.length >= 5
    },
    valRegAddressState() {
      return this.GET_FORM.regAddress.length >= 10
    },
    // bind form fields to form store
    regLastname: {
      get() {
        return this.GET_FORM.regLastname
      },
      set(value) {
        const field = 'regLastname'
        const combine = { field, value }
        this.$store.commit('form/SET_REGFORM', combine)
      },
    },
    regFirstname: {
      get() {
        return this.GET_FORM.regFirstname
      },
      set(value) {
        const field = 'regFirstname'
        const combine = { field, value }
        this.$store.commit('form/SET_REGFORM', combine)
      },
    },
    regEmail: {
      get() {
        return this.GET_FORM.regEmail
      },
      set(value) {
        const field = 'regEmail'
        const combine = { field, value }
        this.$store.commit('form/SET_REGFORM', combine)
      },
    },
    regPhoneCode: {
      get() {
        return this.GET_FORM.regPhoneCode
      },
      set(value) {
        const field = 'regPhoneCode'
        const combine = { field, value }
        this.$store.commit('form/SET_REGFORM', combine)
      },
    },
    regPhoneNumber: {
      get() {
        return this.GET_FORM.regPhoneNumber
      },
      set(value) {
        const field = 'regPhoneNumber'
        const combine = { field, value }
        this.$store.commit('form/SET_REGFORM', combine)
      },
    },
    regCountry: {
      get() {
        return this.GET_FORM.regCountry
      },
      set(value) {
        const field = 'regCountry'
        const combine = { field, value }
        this.$store.commit('form/SET_REGFORM', combine)
      },
    },
    regAddress: {
      get() {
        return this.GET_FORM.regAddress
      },
      set(value) {
        const field = 'regAddress'
        const combine = { field, value }
        this.$store.commit('form/SET_REGFORM', combine)
      },
    },
    totalPrice: function(){    
      if (this.GET_TRAVELER.length > 0){
        let total = 0;
        this.GET_TRAVELER.forEach(element => {
          total += element.price
          this.$store.commit('form/SET_TOTALPRICE', total)
        });
        return this.GET_FORM.regTotalPrice
      }
    }
  },
  data() {
    return {
      setFieldBorder: 'setFieldBorder',
      country: [],
      phoneCode: [],
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()
      if (this.formValidation()) {
        // alert('can be submited')
        // if form ok set vuex state formValidity to true
        this.$store.commit('form/SET_FORMVALIDITY', true)
        this.$router.push('creditPayment')
      }

      //this.$store.commit('form/SET_FORM', this.form)
      //alert(JSON.stringify(this.GET_FORM))
    },
    // function to show agreement modal
    showAgreementModal() {
      this.$refs.childAgreement.showAgreement()
    },
    onstart() {
      this.onStart = 'setField'
    },
    formValidation() {
      if (!this.valRegLNState) {
        this.$refs.ln.$el.focus()
        return false
      } else if (!this.valRegFNState) {
        this.$refs.fn.$el.focus()
        return false
      } else if (!this.valRegEmailState) {
        this.$refs.email.$el.focus()
        return false
      } else if (!this.valRegPhoneNumberState) {
        this.$refs.phone.$el.focus()
        return false
      } else if (!this.valRegAddressState) {
        this.$refs.address.$el.focus()
        return false
      } else if (this.travelerCount == 0) {
        alert('Traveler has not been set!')
        return false
      } else return true
    },
  },
  mounted() {
    //this.form.regContactNumber = this.tpPhoneCode
  },
  created() {
    this.form = this.GET_FORM
    this.country = this.GET_COUNTRY
    this.phoneCode = this.GET_PHONECODE
   
    //console.log(this.GET_PHONECODE)
  },
}
</script>

<style scoped>
.register {
  border-radius: 3px;
  /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
}
.showAgreement:hover {
  cursor: pointer;
  color: #fff;
}
/* Override Bootstrap */
.form {
  margin: auto;
  width: 50%;
}
@media (max-width: 600px) {
  .form {
    width: 100%;
  }
}
.col {
  padding-right: 0;
  padding-left: 0;
}
.setFieldBorder {
  border: 1px solid #ced4da;
}
</style>