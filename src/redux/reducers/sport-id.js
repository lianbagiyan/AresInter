const initialState = {
  sportId: 1,
}

const sportIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SPORT_ID':
      return {
        ...state,
        sportId: action.payload,
      }
    default:
      return state
  }
}

export default sportIdReducer
