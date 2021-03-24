<template>
  <div class="register p-2 mb-2">
    <div class="mb-3 text-center">
      <h4>訂購人</h4>
    </div>
    <b-form @submit="onSubmit">
      <b-form-row class="mb-2">
        <b-col class="mr-2">
          <b-form-input
            v-model="form.regLastname"
            :state="valRegLNState"
            placeholder="Enter your Last name / 姓氏"
            required
          ></b-form-input>
        </b-col>
        <b-col class="ml-2">
          <b-form-input
            v-model="form.regFirstname"
            :state="valRegFNState"
            placeholder="Enter your first name / 名字"
            required
          ></b-form-input>
        </b-col>
      </b-form-row>
      <b-col>
        <b-form-input
          v-model="form.regEmail"
          :state="valRegEmailState"
          type="email"
          placeholder="Email"
          required
        ></b-form-input>
      </b-col>
      <div class="mt-2 text-right">       
        <h6><b-badge class="showAgreement" variant="warning" @click="showAgreementModal">Show Agreement</b-badge></h6>
      </div>
      <div class="text-right mt-2">
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
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

export default {
  components:{
    Agreement,
  },
  computed: {
    ...mapMutations(['SET_REGFORM']),
    ...mapGetters('registrant', ['GET_REGFORM']),
    valRegLNState() {
      return this.form.regLastname.length >= 1
    },
    valRegFNState() {
      return this.form.regFirstname.length >= 1
    },
    valRegEmailState() {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(this.form.regEmail.toLowerCase())
      // return this.form.regEmail.length >= 4
    },
  },
  data() {
    return {
      form: {
        regFirstname: '',
        regLastname: '',
        regEmail: '',
      },
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()
      this.$store.commit('registrant/SET_REGFORM', this.form)
      alert(JSON.stringify(this.GET_REGFORM))
    },
    // function to show agreement modal
    showAgreementModal() {this.$refs.childAgreement.showAgreement()}
  },  
}
</script>

<style scoped>
.register{
  border-radius: 3px;
  /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
}
.showAgreement:hover{
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
</style>