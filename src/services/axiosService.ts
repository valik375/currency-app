import axios from 'axios'

export default () => {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL

  // You can use your API KEY or use my in constants
  // import { API_KEY } from '../constants.ts'
  // axios.defaults.params = { api_key: API_KEY }

  axios.defaults.params = { api_key: import.meta.env.VITE_API_KEY }
  axios.interceptors.response.use(
    response => response,
    error => {
      if (error.response && error.response.status === 401) {
        console.error('Unauthorized, redirecting to login...')
      } else if (error.response && error.response.status >= 500) {
        console.error('Server error, try again later.')
      }
      return Promise.reject(error)
    }
  )
}