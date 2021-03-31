<template>
  <div class="traveler-form">
    <b-modal
      id="travelerForm"
      hide-header
      no-close-on-backdrop
      @ok="handleForm"
    >
      <b-form>
        <b-col>
          <b-form-input
            v-model="form.name"
            placeholder="Enter name"
          ></b-form-input>
        </b-col>
      </b-form>
      {{ index }}
      {{ form }}
    </b-modal>
  </div>
</template>

<script>
import { mapGetters ,mapMutations } from 'vuex'
export default {
  data() {
    return {
      formTraveler: [],
      form: {
        name: '',
      },
      index: null,
    }
  },
  computed: {
    ...mapGetters('form', ['GET_TRAVELER']),
    ...mapMutations('form',['SET_TRAVELER'])
  },
  created() {
    this.formTraveler = this.GET_TRAVELER
  },
  methods: {
    showTravelerForm(index) {
      if (typeof index == 'undefined') {
        this.form = {}
        this.index = null
      } else {
        this.form = {}
        this.form.name = this.GET_TRAVELER[index].name
        this.index = index
      }
      this.$bvModal.show('travelerForm')
    },
    handleForm(e) {
      if (typeof this.form.name == 'undefined' || this.form.name == '') {
        e.preventDefault()
        alert('cannot empty')
      } else {
        const index = this.index
        const form = this.form
        const combine = {index,form}
        this.$store.commit('form/SET_TRAVELER', combine)
      }
    },
  },
}
</script>

<style>
</style>