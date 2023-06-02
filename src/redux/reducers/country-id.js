const initialState = {
  countryId: null,
}

const countryIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COUNTRY_ID':
      return {
        ...state,
        countryId: action.payload,
      }
    default:
      return state
  }
}

export default countryIdReducer
