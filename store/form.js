export const state = () => ({
  form: {
    regFirstname: '',
    regLastname: '',
    regEmail: '',
    regPhoneCode: '+886',
    regPhoneNumber: '',
    regCountry: 'Taiwan',
    regAddress: '',
    regTotalPrice: 0,
    traveler: [],
  },
  formValidity: false,
})

export const mutations = {
  SET_REGFORM(state, { field, value }) {
    switch (field) {
      case 'regFirstname':
        state.form.regFirstname = value
        break
      case 'regLastname':
        state.form.regLastname = value
        break
      case 'regEmail':
        state.form.regEmail = value
        break
      case 'regPhoneCode':
        state.form.regPhoneCode = value
        break
      case 'regPhoneNumber':
        state.form.regPhoneNumber = value
        break
      case 'regCountry':
        state.form.regCountry = value
        break
      case 'regAddress':
        state.form.regAddress = value
        break
    }
  },
  SET_TRAVELER(state, { index, form }) {
    switch (index) {
      case null:
        state.form.traveler.push(form)
        break
      default:
        state.form.traveler[index] = form
        //push empty to make table reactive
        state.form.traveler.push()
        break
    }
  },
  DELETE_TRAVELER(state, index) {
    state.form.traveler.splice(index, 1)
  },
  SET_FORMVALIDITY(state, payload) {
    state.formValidity = payload
  },
  SET_TOTALPRICE(state, payload) {    
    state.form.regTotalPrice = payload
  },
}

export const getters = {
  GET_FORM: (state) => state.form,
  GET_TRAVELER: (state) => state.form.traveler,
  GET_TRAVELERNUMBER: (state) => state.form.traveler.length,
  GET_FORMVALIDITY: (state) => state.formValidity
}
