export const addBetslipTicket = (ticket) => {
  return {
    type: "ADD_BETSLIP_TICKET",
    payload: ticket,
  };
};

export const removeBetslipTicket = (id) => {
  return {
    type: "REMOVE_BETSLIP_TICKET",
    payload: id,
  };
};

export const removeAllBetslip = () => {
  return {
    type: "REMOVE_ALL_BETSLIP",
  };
};
