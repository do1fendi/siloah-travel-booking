export const state = () => ({
  userName: 'systemApi',
  password: "$7qL`Sy&:^9_]&'2",
  token: '',
  groupNumber: '',
})

export const mutations = {
  SET_TOKEN(state, payload) {
    state.token = payload
  },
  SET_GROUPNUMBER(state, payload) {
    state.groupNumber = payload
  },
}

export const getters = {
  GET_USERNAME: (state) => state.userName,
  GET_PASSWORD: (state) => state.password,
  GET_TOKEN: (state) => state.token,
  GET_GROUPNUMBER: (state) => state.groupNumber,
}
