const initialState = {
  tournamentId: null,
}

const tournamentIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOURNAMENT_ID':
      return {
        ...state,
        tournamentId: action.payload,
      }
    default:
      return state
  }
}

export default tournamentIdReducer
