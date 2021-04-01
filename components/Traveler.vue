<template>
  <div>
    <h3>Travelers <b-badge v>{{ travelerNumber }} / {{ maxTravelerNumber }}</b-badge></h3>
    <!-- <p>{{ traveler }}</p>
    <p>{{ traveler.length }}</p> -->
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
    <!-- <div @for></div> -->
    <b-button variant="primary" @click="showTravelerFormModal" :disabled="disabled"
      >Add Traveler</b-button
    >
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
      traveler: this.GET_TRAVELER,
      travelerNumber: 0,
      maxTravelerNumber: 7,
      fields: [{key:'lastTName', label: 'First Name'}, {key:'firstTName',label:'Last Name'}, 'birthday', { key: 'actions' }],
    }
  },
  computed: {
    ...mapGetters('form', ['GET_TRAVELER']),
    ...mapGetters('form',['GET_TRAVELERNUMBER']),
    ...mapMutations('form', ['DELETE_TRAVELER']),
    travelerCount(){
      return this.GET_TRAVELERNUMBER
    },
    disabled(){return this.GET_TRAVELERNUMBER >= this.maxTravelerNumber ? true : false}
    
  },
  watch:{
    travelerCount(newCount, oldCount){
      this.travelerNumber = newCount
    }
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
    this.travelerNumber = this.GET_TRAVELERNUMBER
  },
}
</script>

<style>
</style>