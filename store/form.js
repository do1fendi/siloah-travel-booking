export const state = () => ({
  form: {
    regFirstname: '',
    regLastname: '',
    regEmail: '',
    regContactNumber: '',
    regCountry: 'Taiwan',
    regAddress: '',
    traveler: [],
  },
})

export const mutations = {
  SET_REGFORM(state, field, payload) {
    switch (field) {
      case 'regFirstname':
        state.form.regFirstname = payload
        break
      case 'regLastname':
        state.form.regLastname = payload
        break
      case 'regEmail':
        state.form.regEmail = payload
        break
      case 'regCountry':
        state.form.regCountry = payload
        break
      case 'regAddress':
        state.form.regAddress = payload
        break
    }
  },
  SET_TRAVELER(state,  {index, form}) {
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
  DELETE_TRAVELER(state, index){
    state.form.traveler.splice(index,1)
  }
}

export const getters = {
  GET_FORM: (state) => state.form,
  GET_TRAVELER: (state) => state.form.traveler,
  GET_TRAVELERNUMBER: (state) => state.form.traveler.length,
}
