<template>
  <div class="container">
    <Information :tourPackage="this.tourPackageData" />
    <Register />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Information from '../components/Information.vue'
import Register from '../components/Register.vue'

export default {
  components: {
    Information,
    Register,
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
    ...mapGetters('roomtype',['GET_PACKAGE_PRICE']),
    ...mapMutations('roomtype', ['SET_PACKAGE_PRICE']),
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
        //replace some string so javascript could understand
        let obj = JSON.stringify(data).replaceAll('::', '_')
        obj = obj.replaceAll('(', '_')
        obj = obj.replaceAll(')', '_')
        obj = JSON.parse(obj)
        const setPrices = {

          Inside_room: {
             singleRoom: obj.TOURPACKAGE_SALSEPRICE_CruiseClass1_1_,
             doubleRoom: obj.TOURPACKAGE_SALSEPRICE_CruiseClass1_2_,
             tripleRoom: obj.TOURPACKAGE_SALSEPRICE_CruiseClass1_3_,
             quadRoom: obj.TOURPACKAGE_SALSEPRICE_CruiseClass1_4_,
             kidRoom: obj.TOURPACKAGE_SALSEPRICE_CruiseClass1_5_,
          },
          Porthole_Room: {
             singleRoom: obj.TOURPACKAGE_SALSEPRICE_CruiseClass2_1_,
             doubleRoom: obj.TOURPACKAGE_SALSEPRICE_CruiseClass2_2_,
             tripleRoom: obj.TOURPACKAGE_SALSEPRICE_CruiseClass2_3_,
             quadRoom: obj.TOURPACKAGE_SALSEPRICE_CruiseClass2_4_,
             kidRoom: obj.TOURPACKAGE_SALSEPRICE_CruiseClass2_5_,
          },
          Sea_view_room: {
             singleRoom: obj.TOURPACKAGE_SALSEPRICE_CruiseClass3_1_,
             doubleRoom: obj.TOURPACKAGE_SALSEPRICE_CruiseClass3_2_,
             tripleRoom: obj.TOURPACKAGE_SALSEPRICE_CruiseClass3_3_,
             quadRoom: obj.TOURPACKAGE_SALSEPRICE_CruiseClass3_4_,
             kidRoom: obj.TOURPACKAGE_SALSEPRICE_CruiseClass3_5_,
          },
          Terrace_Room: {
             singleRoom: obj.TOURPACKAGE_SALSEPRICE_CruiseClass4_1_,
             doubleRoom: obj.TOURPACKAGE_SALSEPRICE_CruiseClass4_2_,
             tripleRoom: obj.TOURPACKAGE_SALSEPRICE_CruiseClass4_3_,
             quadRoom: obj.TOURPACKAGE_SALSEPRICE_CruiseClass4_4_,
             kidRoom: obj.TOURPACKAGE_SALSEPRICE_CruiseClass4_5_,
          },
          Palace_Suite: {
             singleRoom: obj.TOURPACKAGE_SALSEPRICE_CruiseClass5_1_,
             doubleRoom: obj.TOURPACKAGE_SALSEPRICE_CruiseClass5_2_,
             tripleRoom: obj.TOURPACKAGE_SALSEPRICE_CruiseClass5_3_,
             quadRoom: obj.TOURPACKAGE_SALSEPRICE_CruiseClass5_4_,
             kidRoom: obj.TOURPACKAGE_SALSEPRICE_CruiseClass5_5_,
          },
          Palace_Deluxe_Suite: {
             singleRoom: obj.TOURPACKAGE_SALSEPRICE_CruiseClass6_1_,
             doubleRoom: obj.TOURPACKAGE_SALSEPRICE_CruiseClass6_2_,
             tripleRoom: obj.TOURPACKAGE_SALSEPRICE_CruiseClass6_3_,
             quadRoom: obj.TOURPACKAGE_SALSEPRICE_CruiseClass6_4_,
             kidRoom: obj.TOURPACKAGE_SALSEPRICE_CruiseClass6_5_,
          },
          Palace_Executive_Suite: {
             singleRoom: obj.TOURPACKAGE_SALSEPRICE_CruiseClass7_1_,
             doubleRoom: obj.TOURPACKAGE_SALSEPRICE_CruiseClass7_2_,
             tripleRoom: obj.TOURPACKAGE_SALSEPRICE_CruiseClass7_3_,
             quadRoom: obj.TOURPACKAGE_SALSEPRICE_CruiseClass7_4_, 
             kidRoom: obj.TOURPACKAGE_SALSEPRICE_CruiseClass7_5_,
          },
          Palace_Courtyard_Villa: {
             singleRoom: obj.TOURPACKAGE_SALSEPRICE_CruiseClass8_1_,
             doubleRoom: obj.TOURPACKAGE_SALSEPRICE_CruiseClass8_2_,
             tripleRoom: obj.TOURPACKAGE_SALSEPRICE_CruiseClass8_3_,
             quadRoom: obj.TOURPACKAGE_SALSEPRICE_CruiseClass8_4_,
             kidRoom: obj.TOURPACKAGE_SALSEPRICE_CruiseClass8_5_,
          },
         
        }
        this.$store.commit('roomtype/SET_PACKAGE_PRICE', setPrices)
        console.log(JSON.stringify(this.GET_PACKAGE_PRICE))
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
  margin-bottom: 70px;
}
</style>
