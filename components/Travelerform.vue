<template>
  <div class="traveler-form">
    <b-modal
      id="travelerForm"
      no-close-on-backdrop
      hide-header-close
      @ok="handleForm"
      size="lg"
    >
      <template v-slot:modal-header>
        <div class="modalHeader w-100 text-center">
          <span class="text-capitalize modalTitle">traveler</span>
          <b-button
            size="sm"
            variant="outline-secondary"
            v-if="!travelerCount"
            @click="copyData"
            >與訂購人相同</b-button
          >
        </div>
      </template>
      <b-form>
        <b-form-row class="mb-2">
          <b-col>
            <b-form-input
              :class="setFieldBorder"
              v-model="formTraveler.lastTName"
              :state="valLNState"
              placeholder="Enter Last Name / 姓氏"
              ref="ln"
            ></b-form-input>
          </b-col>
          <b-col>
            <b-form-input
              :class="setFieldBorder"
              v-model="formTraveler.firstTName"
              :state="valFNState"
              placeholder="Enter First Name / 名字"
              ref="fn"
            ></b-form-input>
          </b-col>
          <b-col md="auto">
            <b-form-datepicker
              :class="setFieldBorder"
              id="datepicker-placeholder"
              v-model="formTraveler.birthday"
              :state="valBirthdayState"
              placeholder="Birthday"
              locale="en"
              :max="disableFutureDate"
              ref="birth"
            ></b-form-datepicker>
          </b-col>
        </b-form-row>
        <b-form-row>
          <b-col>
            <b-form-input
              :class="setFieldBorder"
              :state="valIDState"
              v-model="formTraveler.identityNumber"
              placeholder="Passport / 身分證字號"
              ref="id"
            ></b-form-input>
          </b-col>
        </b-form-row>
        <b-form-row class="mt-2">
          <b-col
            ><b-form-select
              v-model="formTraveler.mobileCountryCode"
              :options="phoneCode"
            ></b-form-select
          ></b-col>
          <b-col>
            <b-form-input
              :class="setFieldBorder"
              :state="valMobileState"
              v-model="formTraveler.mobile"
              placeholder="Mobile / 手機"
              ref="mb"
              type="number"
            ></b-form-input>
          </b-col>
        </b-form-row>
        <b-form-row class="mt-2">
          <b-col>
            <b-form-input
              :class="setFieldBorder"
              :state="valEmailState"
              v-model="formTraveler.email"
              placeholder="Email"
              ref="em"
            ></b-form-input>
          </b-col>
        </b-form-row>
      </b-form>

      <!-- {{ index }}
      {{ travelerNumber }}
      {{ form }} -->
    </b-modal>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    return {
      // formTraveler: [],
      phoneCode: [],
      formTraveler: {
        lastTName: '',
        firstTName: '',
        birthday: '',
        identityNumber: '',
        mobileCountryCode: '',
        mobile: '',
        email: '',
      },
      index: null,
      disableFutureDate: today,
      setFieldBorder: 'setFieldBorder',
    }
  },
  computed: {
    ...mapGetters('form', ['GET_TRAVELER', 'GET_TRAVELERNUMBER', 'GET_FORM']),
    ...mapGetters('country', ['GET_PHONECODE']),
    ...mapMutations('form', ['SET_TRAVELER']),
    travelerCount() {
      return this.GET_TRAVELERNUMBER
    },
    valLNState() {
      return this.formTraveler.lastTName.length >= 1
    },
    valFNState() {
      return this.formTraveler.firstTName.length >= 1
    },
    valBirthdayState() {
      return this.formTraveler.birthday.length >= 1
    },
    valIDState() {
      return this.formTraveler.identityNumber.length >= 5
    },
    valMobileState() {
      return this.formTraveler.mobile.length >= 5
    },
    valEmailState() {
     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(this.formTraveler.email.toLowerCase())
    },
  },
  created() {
    // this.formTraveler = this.GET_TRAVELER
    this.travelerNumber = this.GET_TRAVELERNUMBER
    this.phoneCode = this.GET_PHONECODE
  },
  methods: {
    // index is from edit button, and add traveler button is undefined index
    showTravelerForm(index) {
      // clear formTraveler value
      this.formTraveler = {
        lastTName: '',
        firstTName: '',
        birthday: '',
        identityNumber: '',
        mobileCountryCode: '',
        mobile: '',
        email: '',
      }
      if (typeof index == 'undefined') {
        this.index = null
        this.phoneCode = this.GET_PHONECODE
        this.formTraveler.mobileCountryCode = '+886'
      } else {
        //load found traveler data to current form fields
        this.formTraveler.lastTName = this.GET_TRAVELER[index].lastTName
        this.formTraveler.firstTName = this.GET_TRAVELER[index].firstTName
        this.formTraveler.birthday = this.GET_TRAVELER[index].birthday
        this.formTraveler.identityNumber = this.GET_TRAVELER[
          index
        ].identityNumber
        this.formTraveler.mobileCountryCode = this.GET_TRAVELER[
          index
        ].mobileCountryCode
        this.formTraveler.mobile = this.GET_TRAVELER[index].mobile
        this.formTraveler.email = this.GET_TRAVELER[index].email
        this.index = index
      }
      this.$bvModal.show('travelerForm')
    },

    handleForm(e) {
      if (!this.validateFormTraveler()) {
        e.preventDefault()
      } else {
        const index = this.index
        const form = this.formTraveler
        const combine = { index, form }
        this.$store.commit('form/SET_TRAVELER', combine)
      }
    },
    copyData() {
      this.formTraveler.lastTName = this.GET_FORM.regLastname
      this.formTraveler.firstTName = this.GET_FORM.regFirstname
      this.formTraveler.mobileCountryCode = this.GET_FORM.regPhoneCode
      this.formTraveler.mobile = this.GET_FORM.regPhoneNumber
      this.formTraveler.email = this.GET_FORM.regEmail
    },
    validateFormTraveler() {
      if (!this.valLNState) {
        this.$refs.ln.$el.focus()
        return false
      }else if(!this.valFNState){
        this.$refs.fn.$el.focus()
        return false
      } else if(!this.valBirthdayState){
        this.$refs.birth.$el.focus()
        return false
      }else if(!this.valIDState){
        this.$refs.id.$el.focus()
        return false
      }else if(!this.valMobileState){
        this.$refs.mb.$el.focus()
        return false
      }
      else {
        return true
      }
    },
  },
}
</script>

<style scoped>
.modalTitle {
  font-size: 1.2rem;
  font-weight: 600;
}
.setFieldBorder {
  border: 1px solid #ced4da;
}
</style>