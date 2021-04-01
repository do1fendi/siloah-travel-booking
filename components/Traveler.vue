<template>
  <div>
    <h3>Travelers</h3>
    <!-- <p>{{ traveler }}</p>
    <p>{{ traveler.length }}</p> -->
    <div>
      <b-table striped hover :items="traveler" :fields="fields">
        <template #cell(actions)="data">
          <b-button variant="primary" @click="editTraveler(data)"
            >Edit</b-button
          >
          <b-button variant="danger" @click="delTraveler(data)"
            >Delete</b-button
          >
        </template>
      </b-table>
    </div>
    <!-- <div @for></div> -->
    <b-button variant="primary" @click="showTravelerFormModal"
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
      fields: ['name', { key: 'actions' }],
    }
  },
  computed: {
    ...mapGetters('form', ['GET_TRAVELER']),
    ...mapMutations('form', ['DELETE_TRAVELER']),
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