import axios from 'axios'

export default () => {

  // You can use your API KEY or use constants
  // const API_URL = 'https://api.currencybeacon.com/v1'
  // const API_KEY = 'ZOVlnCqkmkl7SiCBnLKTzvZ4eXtzsk2c'
  // axios.defaults.baseURL = API_URL
  // axios.defaults.params = { api_key: API_KEY }

  axios.defaults.baseURL = import.meta.env.VITE_API_URL
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