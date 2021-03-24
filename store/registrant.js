export const state = () =>({
    // regLastName:'',
    // regFirstName:'',
    // regEmail:'',
    // regContactNumber:'',
    // regCountry:'',
    // regAddress:'',
    regForm: {},
})

export const mutations = {
    SET_REGFORM(state, payload){
        state.regForm = payload
    }
}

export const getters = {
    GET_REGFORM: (state) => state.regForm
}