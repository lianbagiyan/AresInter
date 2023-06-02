import store from '../redux/store'
const API_URL = 'https://sportsbook-api.lasworks.com/api'

const fetchHeaders = {
  SiteId: 1,
  Lang: 'en',
  Accept: '*/*',
  'Content-Type': 'application/json',
}

export const getSportData = () => {
  return async () => {
    const response = await fetch(`${API_URL}/prematch/menu`, {
      headers: fetchHeaders,
      body: JSON.stringify({
        Interval: 5,
      }),
      method: 'POST',
    })

    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }

    return response.json()
  }
}

export const getTournamentData = (tournamentId) => {
  return async () => {
    const response = await fetch(`${API_URL}/prematch/tournament`, {
      headers: fetchHeaders,
      body: JSON.stringify({
        Interval: 5,
        MarketId: null,
        Mobile: true,
        TournamentId: tournamentId,
      }),
      method: 'POST',
    })

    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }

    return response.json()
  }
}

export const getBetslipData = (eventId) => {
  return async () => {
    const tickets = store.getState().betslip.betslipTickets
    const response = await fetch(`${API_URL}/betslip`, {
      headers: fetchHeaders,
      body: JSON.stringify({
        Id: eventId,
        Ticket: tickets,
        Type: 'O',
      }),
      method: 'POST',
    })

    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }

    return response.json()
  }
}
