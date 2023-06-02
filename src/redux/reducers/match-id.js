const initialState = {
  matchId: null,
}

const matchIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MATCH_ID':
      return {
        ...state,
        matchId: action.payload,
      }
    default:
      return state
  }
}

export default matchIdReducer
