<template>
  <div>
    <div class="regPersonTitle">
      <h4>訂購人</h4>
    </div>
    <b-form-row>
      <b-col>
        <b-form-input
          id="input-1"
          v-model="regLastname"
          :state="valRegLNState"
          placeholder="Enter your Last name / 姓氏"
        ></b-form-input>
      </b-col>
      <b-col>
        <b-form-input
          id="input-1"
          v-model="regFirstname"
          :state="valRegFNState"
          placeholder="Enter your first name / 名字"
        ></b-form-input>
      </b-col>
    </b-form-row>

    <b-button type="submit" variant="primary">Submit</b-button>
    <b-button type="reset" variant="danger">Reset</b-button>
  </div>
</template>

<script>
export default {
  computed: {
    valRegLNState() {
      return this.regLastname.length >= 1
    },
    valRegFNState() {
      return this.regFirstname.length >= 1
    },
  },
  data() {
    return {
      regFirstname: '',
      regLastname:''
    }
  },
}
</script>

<style>
.regPersonTitle {
  text-align: center;
  padding: 10px;
}
</style>