import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { QueryClient, QueryClientProvider } from 'react-query'
import { createRoot } from 'react-dom/client'

const queryClient = new QueryClient()

const rootElement = document.getElementById('root')
const app = (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Provider>
)

const root = createRoot(rootElement)
root.render(app)

reportWebVitals()
