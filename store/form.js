export const state = () =>({
    form:[]
})

export const mutations = {
    SET_FORM(state,payload){
        state.form=[]
        state.form.push(payload)
    }
}

export const getters = {
    GET_FORM: (state) => state.form
}