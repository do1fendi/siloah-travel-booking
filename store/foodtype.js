export const state = () => ({
  foodType: [
    { value: 'NORMAL', text: '一般餐食 Normal Food' },
    { value: 'MORNING_VEGAN', text: '早齋 Morning Vegan' },
    { value: 'VEGAN', text: '全素 Vegetarian' },
    { value: 'NO_PORK', text: '不吃豬 No pork' },
  ],
})

export const getters = {
  GET_FOODTYPE: (state) => state.foodType
}

