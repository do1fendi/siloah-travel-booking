<template>
  <div class="mt-5">
 
    <b-row>
      <div class="col">
        <h3>
        Travelers
        <b-badge class="badge"
          >{{ travelerCount }} / {{ maxTravelerNumber }}</b-badge
        >
        </h3>
      </div>
      <div class="col text-right">
        <b-button
          size="sm"
          variant="primary"
          @click="showTravelerFormModal"
          :disabled="disabled"
          >Add Traveler</b-button
        >
      </div>
    </b-row>
    <div>
      <b-table
        hover
        head-variant="light"
        small
        :items="traveler"
        :fields="fields"
      >
        <template #cell(FullName)="data">
          {{traveler[data.index].lastTName}} {{traveler[data.index].firstTName}}
        </template>
        <template #cell(actions)="data">
          <b-button size="sm" variant="info" @click="editTraveler(data)"
            >修改</b-button
          >
          <b-button size="sm" variant="danger" @click="delTraveler(data)"
            >刪除</b-button
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
      fields: [
        {key: 'FullName'},
        // { key: `lastTName`, label: 'First Name' },
        // { key: 'firstTName', label: 'Last Name' },
        'birthday',
        { key: 'actions' },
      ],
    }
  },
  computed: {
    ...mapGetters('form', ['GET_TRAVELER']),
    ...mapGetters('form', ['GET_TRAVELERNUMBER']),
    ...mapMutations('form', ['DELETE_TRAVELER']),
    travelerCount: function () {
      return this.GET_TRAVELERNUMBER
    },
    disabled() {
      return this.travelerCount >= this.maxTravelerNumber ? true : false
    },
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

<style scoped>
.badge {
  font-size: 14px;
}
</style>