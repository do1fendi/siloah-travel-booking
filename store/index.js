export const state = () => ({
    userName: "siloahapiweb",
    password: "4qe3aI1!XSZA)Q^mR*wIChEE",
    token: ""
})

export const mutations = {   
    SET_TOKEN (state, payload){
        state.token = payload
    }
}

export const getters = {
    GET_USERNAME: (state) => state.userName,
    GET_PASSWORD: (state) => state.password,
    GET_TOKEN: (state) => state.token
}