export const SET_SPORT_ID = "SET_SPORT_ID";

export const setSportId = (sportId) => {
  return {
    type: SET_SPORT_ID,
    payload: sportId,
  };
};
