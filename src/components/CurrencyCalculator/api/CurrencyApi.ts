import axios from 'axios'

interface ConvertParams {
  from: string
  to: string
  amount: number
}

export default {
  async read() {
    const { data } = await axios.get('/currencies')
    return data.response
  },

  async convert(params: ConvertParams) {
    const { data } = await axios.get('/convert', { params })
    return data.response
  }
}