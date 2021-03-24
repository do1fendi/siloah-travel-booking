export const state = () => ({
  country: ['Taiwan', 'Malaysia', 'Indonesia'],
  phoneCode: ['+886','+62', '+60']
})

export const getters = {
    GET_COUNTRY: (state) => state.country,
    GET_PHONECODE: (state) => state.phoneCode
}
