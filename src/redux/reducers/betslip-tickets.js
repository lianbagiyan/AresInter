const initialState = {
  betslipTickets: [],
}

const betslipTicketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BETSLIP_TICKET':
      return {
        ...state,
        betslipTickets: action.payload,
      }
    case 'REMOVE_BETSLIP_TICKET':
      return {
        ...state,
        betslipTickets: state.betslipTickets.filter(
          (odd) => odd.Id !== action.payload
        ),
      }
    case 'REMOVE_ALL_BETSLIP':
      return {
        ...state,
        betslipTickets: [],
      }
    default:
      return state
  }
}

export default betslipTicketsReducer
