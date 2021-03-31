<template>
  <div>
    <h3>Traveler</h3>
    <p>{{ traveler }}</p>
    <p>{{ traveler.length }}</p>
    <div>
      <b-table striped hover :items="traveler" :fields="fields">
        <template #cell(actions)="data">
          <button @click="editTraveler(data)">Edit</button>
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
import Travelerform from './Travelerform.vue'

export default {
  components: {
    Travelerform,
  },
  data() {
    return {
      traveler: this.GET_TRAVELER,
      fields: ['name', {key:"actions"}],
    }
  },
  computed: {
    ...mapGetters('form', ['GET_TRAVELER']),
  },
  methods: {
    showTravelerFormModal() {
      this.$refs.childTravelform.showTravelerForm()
    },
    editTraveler(a){
      //console.log(a.index)
      this.$refs.childTravelform.showTravelerForm(a.index)
    }
  },
  created() {
    this.traveler = this.GET_TRAVELER
  },
}
</script>

<style>
</style>