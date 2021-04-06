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
          <b-button size="sm" variant="outline-secondary" v-if="showButton" @click="copyData"
            >與訂購人相同</b-button
          >
        </div>
      </template>
      <b-form>
        <b-form-row class="mb-2">
          <b-col>
            <b-form-input
              v-model="form.lastTName"
              placeholder="Enter Last Name / 姓氏"
            ></b-form-input>
          </b-col>
          <b-col>
            <b-form-input
              v-model="form.firstTName"
              placeholder="Enter First Name / 名字"
            ></b-form-input>
          </b-col>
          <b-col md="auto">
            <b-form-datepicker
              id="datepicker-placeholder"
              v-model="form.birthday"
              placeholder="Birthday"
              locale="en"
            ></b-form-datepicker>
          </b-col>
        </b-form-row>
      </b-form>
      {{index}}
    </b-modal>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      formTraveler: [],
      form: {
        lastTName: '',
        firstTName: '',
        birthday: '',
      },
      index: null,
      showButton: false,
    }
  },
  computed: {
    ...mapGetters('form', ['GET_TRAVELER']),
    ...mapGetters('form', ['GET_TRAVELERNUMBER']),
    ...mapMutations('form', ['SET_TRAVELER']),  
  },
  created() {
    this.formTraveler = this.GET_TRAVELER
    this.travelerNum = this.GET_TRAVELERNUMBER
  },
  methods: {
    showTravelerForm(index) {
      if (typeof index == 'undefined') {
        this.form = {}
        this.index = null
        this.showButton = true
      } else {
        this.form = {}
        //load found traveler data to current form fields
        this.form.lastTName = this.GET_TRAVELER[index].lastTName
        this.form.firstTName = this.GET_TRAVELER[index].firstTName
        this.form.birthday = this.GET_TRAVELER[index].birthday
        this.index = index
        this.showButton = false
      }
      this.$bvModal.show('travelerForm')
    },
    handleForm(e) {
      if (
        typeof this.form.lastTName == 'undefined' ||
        this.form.lastTName == ''
      ) {
        e.preventDefault()
        alert('cannot empty')
      } else {
        const index = this.index
        const form = this.form
        const combine = { index, form }
        this.$store.commit('form/SET_TRAVELER', combine)
      }
    },
    copyData(){      
      // this.form.lastTName = this.GET_TRAVELER.regLastname
      // this.form.firstTName = this.GET_TRAVELER.regFirstname
      alert(this.GET_TRAVELER.regLastname)
    }
  },
}
</script>

<style scoped>
.modalTitle {
  font-size: 1.2rem;
  font-weight: 600;
}
</style>