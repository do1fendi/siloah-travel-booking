// export const state = () =>({
//     form:[]
// })

// export const mutations = {
//     SET_FORM(state,payload){
//         state.form=[]
//         state.form.push(payload)
//     }
// }

// export const getters = {
//     GET_FORM: (state) => state.form
// }

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
  async SET_TRAVELER(state,  {index, form}) {
    switch (index) {
      case null:
        state.form.traveler.push(form)
        break
      default:
        state.form.traveler.push(form)
        break
    }

    // const len = state.form.traveler.length
    // payload['id'] = len+1
    // if(typeof (index) == 'undefined'){
    //     state.form.traveler.push(payload)

    // }
    // else{
    //     state.form.traveler[index] =payload
    // }
    console.log(index)
    console.log(form)
  },
}

export const getters = {
  GET_FORM: (state) => state.form,
  GET_TRAVELER: (state) => state.form.traveler,
  GET_TRAVELERNUMBER: (state) => state.form.traveler.length,
}
