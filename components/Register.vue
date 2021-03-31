<template>
  <div class="register p-2 mb-2">
    <div class="mb-3 text-center">
      <h4>訂購人</h4>
    </div>
    <b-form @submit="onSubmit">
      <b-form-row class="mb-2">
        <b-col class="mr-2">
          <b-form-input
            :class="setFieldBorder"
            v-model="form.regLastname"
            :state="valRegLNState"
            placeholder="Enter your Last name / 姓氏"
            required
          ></b-form-input>
        </b-col>
        <b-col class="ml-2">
          <b-form-input
            :class="setFieldBorder"
            v-model="form.regFirstname"
            :state="valRegFNState"
            placeholder="Enter your first name / 名字"
            required
          ></b-form-input>
        </b-col>
      </b-form-row>
      <b-col class="mb-2">
        <b-form-input
          :class="setFieldBorder"
          v-model="form.regEmail"
          :state="valRegEmailState"
          type="email"
          placeholder="Email"
          required
        ></b-form-input>
      </b-col>
      <b-form-row class="mb-2">
        <b-col class="mr-2">
          <b-form-select
            v-model="tpPhoneCode"
            :options="phoneCode"
            @change="onPhoneCodeChange"
          >
          </b-form-select>
        </b-col>
        <b-col class="ml-2">
          <b-form-input
            :class="setFieldBorder"
            v-model="tpPhoneNumber"
            type="number"
            :state="valRegPhoneNumberState"
            placeholder="Phone Number 聯絡電話"
            @change="onPhoneCodeChange"
          >
          </b-form-input>
        </b-col>
      </b-form-row>
      <b-col class="mt-2">
        <b-form-select
          v-model="form.regCountry"
          :options="country"
        ></b-form-select>
      </b-col>
      <b-col class="mt-2">
        <b-form-input
          :class="setFieldBorder"
          v-model="form.regAddress"
          placeholder="Enter Address 地址"
          :state="valRegAddressState"
          required
        ></b-form-input>
      </b-col>
    
      <div class="mt-2 text-right">
        <h6>
          <b-badge
            class="showAgreement"
            variant="danger"
            @click="showAgreementModal"
            >Show Agreement</b-badge
          >
        </h6>
      </div>
      <b-alert show variant="success">
        Travelers
      </b-alert>
      <Traveler />
      <div class="text-right mt-2">
        <b-button type="submit" variant="warning"><h6>Submit</h6></b-button>        
      </div>
    </b-form>
    <div>
      {{ form }}
    </div>
    
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
    Traveler
  },
  computed: { 
    ...mapMutations('form',['SET_REGFORM']),
    ...mapGetters('country', ['GET_COUNTRY']),
    ...mapGetters('country', ['GET_PHONECODE']),
    ...mapGetters('form',['GET_FORM']),

    valRegLNState() {
      return this.form.regLastname.length >= 1
    },
    valRegFNState() {
      return this.form.regFirstname.length >= 1
    },
    valRegEmailState() {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(this.form.regEmail.toLowerCase())
    },
    valRegPhoneNumberState() {
      return this.tpPhoneNumber.length >= 5
    },
    valRegAddressState() {
      return this.form.regAddress.length >= 5
    },
    // bind form fields to form store
    // regFirstname: {
    //   get() {
    //     return this.$store.state.form.regFirstname;
    //   },
    //   set(value) {
    //     this.$store.commit('form/SET_REGFORM', regFirstname, value);
    //   },
    // },

  },
  data() {
    return {
      setFieldBorder: 'setFieldBorder',
      country: [],
      phoneCode: [],
      tpPhoneCode: '+886',
      tpPhoneNumber: '',
      form: this.GET_FORM,
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()
      this.$store.commit('form/SET_FORM', this.form)
      alert(JSON.stringify(this.GET_FORM))
    },
    // function to show agreement modal
    showAgreementModal() {
      this.$refs.childAgreement.showAgreement()
    },
    onPhoneCodeChange() {
      this.form.regContactNumber = `${this.tpPhoneCode}${this.tpPhoneNumber}`
    },
    onstart() {
      this.onStart = 'setField'
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
.form-row {
  margin-left: 0;
  margin-right: 0;
}
.col {
  padding-right: 0;
  padding-left: 0;
}
.setFieldBorder {
  border: 1px solid #ced4da;
}
</style>