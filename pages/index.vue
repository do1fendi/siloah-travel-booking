<template>
  <div class="container">
    <Information :tourPackage= "this.tourPackageData" />
    <Register />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Information from '../components/Information.vue'
import Register from '../components/Register.vue'

export default {
  components: {
    Information,
    Register
  },
  head() {
    return {
      title: 'Siloah Booking',
      meta: [
        {
          name: 'Siloah',
          content: 'Siloah Travel Booking System',
        },
      ],
    }
  },
  data() {
    return {
      country: [],
      tourPackageData: '',
    }
  },
  computed: {
    ...mapGetters('country', ['GET_COUNTRY']),
    ...mapGetters(['GET_TOKEN', 'GET_USERNAME', 'GET_PASSWORD']),
  },
  mounted() {
    // first load get url param and run api to get tourpackage from TVT
    this.getToken()
    // get new token every 15 minutes (expired)
    setInterval(() => {
      this.getToken()
    }, 900000)

    this.country = this.GET_COUNTRY
  },
  methods: {
    //Function to get Token
    getToken() {
      const config = {
        method: 'POST',
        url:
          'https://ofc.taiwanviptravel.com/fmi/data/v1/databases/TVT/sessions',
        headers: {
          Authorization:
            `Basic ` + btoa(`${this.GET_USERNAME}:${this.GET_PASSWORD}`),
          'Content-Type': 'application/json',
        },
        data: {},
      }
      const apiGetToken = async () => {
        const res = await this.$axios(config)
        const data = await res.data.response
        this.$store.commit('SET_TOKEN', data.token)
        this.getTourPackage()
      }
      apiGetToken()
    },

    getTourPackage() {      
      const query = JSON.stringify({
        query: [
          {
            groupNumber: this.$route.query.selectedGroupNumber,
          },
        ],
      })
      const config = {
        method: 'POST',
        url:
          'https://ofc.taiwanviptravel.com/fmi/data/v1/databases/TVT/layouts/DATA_API_TOURPACKAGE/_find',
        headers: {
          Authorization: `Bearer ${this.GET_TOKEN}`,
          'Content-Type': 'application/json',
        },
        data: query,
      }
      const apiGetPackage = async () => {
        const res = await this.$axios(config)
        const data = await res.data.response.data[0].fieldData
        this.tourPackageData = data
      }
      apiGetPackage()
    },
  },
}
</script>

<style>
.container {
  padding: 0px;
  color: #434852;
  font-weight: 500;
}
</style>
