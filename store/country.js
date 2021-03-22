export const state = () => ({
  country: ['Taiwan', 'Malaysia', 'Indonesia']
})

export const getters = {
    GET_COUNTRY: (state) => {
       return state.country
    }
}
