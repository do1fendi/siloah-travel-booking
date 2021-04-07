<template>
  <div class="mt-5">
    <h3>Travelers <b-badge>{{ travelerCount }} / {{ maxTravelerNumber }}</b-badge> <b-button size="sm" variant="primary" @click="showTravelerFormModal" :disabled="disabled"
      >Add Traveler</b-button
    ></h3>
    <div>
      <b-table striped hover :items="traveler" :fields="fields">
        <template #cell(actions)="data">
          <b-button size="sm" variant="info" @click="editTraveler(data)"
            >Edit</b-button
          >
          <b-button size="sm" variant="danger" @click="delTraveler(data)"
            >Delete</b-button
          >
        </template>
      </b-table>
    </div>    
    
    <Travelerform ref="childTravelform" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import Travelerform from './Travelerform.vue'

export default {
  components: {
    Travelerform,
  },
  data() {
    return {
      traveler: [],
      travelerNumber: 0,
      maxTravelerNumber: 7,
      fields: [{key:'lastTName', label: 'First Name'}, {key:'firstTName',label:'Last Name'}, 'birthday', { key: 'actions' }],
    }
  },
  computed: {
    ...mapGetters('form', ['GET_TRAVELER']),
    ...mapGetters('form',['GET_TRAVELERNUMBER']),
    ...mapMutations('form', ['DELETE_TRAVELER']),    
    travelerCount: function () {return this.GET_TRAVELERNUMBER},
    disabled(){return this.travelerCount >= this.maxTravelerNumber ? true : false}
  },
 
  methods: {
    showTravelerFormModal() {
      this.$refs.childTravelform.showTravelerForm()
    },
    editTraveler(data) {
      this.$refs.childTravelform.showTravelerForm(data.index)
    },
    delTraveler(data) {
      this.$store.commit('form/DELETE_TRAVELER', data.index)
    },
  },
  created() {
    this.traveler = this.GET_TRAVELER
  },
}
</script>

<style>
</style>