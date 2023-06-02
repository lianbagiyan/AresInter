import { combineReducers, createStore } from 'redux'
import tournamentIdReducer from './reducers/tournament-id'
import countryIdReducer from './reducers/country-id'
import sportIdReducer from './reducers/sport-id'
import matchIdReducer from './reducers/match-id'
import betslipTicketsReducer from './reducers/betslip-tickets'

const rootReducer = combineReducers({
  tournament: tournamentIdReducer,
  country: countryIdReducer,
  sport: sportIdReducer,
  match: matchIdReducer,
  betslip: betslipTicketsReducer,
})

const store = createStore(rootReducer)

export default store
