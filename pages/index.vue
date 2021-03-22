<template>
  <div class="container">
    <p>{{ country }}</p>
    <p>{{ token }}</p>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
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
      token: '',
      country: [],
    }
  },
  mounted() {
    // first load get url param and run api to get tourpackage from TVT
    const config = {
      method: 'POST',
      url: 'https://ofc.taiwanviptravel.com/fmi/data/v1/databases/TVT/sessions',
      headers: {
        Authorization: `Basic c2lsb2FoYXBpd2ViOjRxZTNhSTEhWFNaQSlRXm1SKndJQ2hFRQ==`,
        'Content-Type': 'application/json',
      },
      data: {},
    }
    this.$axios(config)
      .then((res) => this.$store.commit('SET_TOKEN', res.data))

    this.country = this.$store.getters['country/GET_COUNTRY']
    //this.$store.commit('SET_TOKEN', "herherh")
    this.token = this.$store.getters['GET_TOKEN']
  },
}
</script>

<style>
</style>
