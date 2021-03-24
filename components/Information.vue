<template>
  <div class="top">
    <b-alert show variant="success">
      <b-row>
        <b-col cols="8">
          <p>團名: {{ tourPackage.tourSubject }}</p>
          <p>出發日期: {{ tourPackage.departureDate }}</p>
        </b-col>
        <b-col cols="4" class="avSeat">
          <p>
            Available Seats:
            <span
              ><b-avatar class="avFontSize"
                :variant="variant"
                :text="String(available_seat)"
              ></b-avatar
            ></span>
          </p>
        </b-col>
      </b-row>
    </b-alert>
  </div>
</template>

<script>
export default {
  name: 'Top',
  props: ['tourPackage'],
  data() {
    return {
      //variant: '',
      available_seat: '0',
    }
  },
  computed: {
    variant() {      
      this.available_seat = this.tourPackage.seat_available ? this.tourPackage.seat_available: '0'
      switch (true) {
        case this.available_seat > 10:
          return 'primary'
          break
        case this.available_seat < 10 && this.available_seat > 0:
          return 'warning'
          break
        default:
          return 'danger'
      }
    },
  },
}
</script>

<style scoped>
.top {
  padding: 0;
  font-weight: 600;
}
.avSeat {
  text-align: right; 
}
.avFontSize {
    font-weight: 700;
}
</style>