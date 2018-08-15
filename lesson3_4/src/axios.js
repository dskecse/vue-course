import axios from 'axios'

function getToken() {
  return '123'
}

const instance = axios.create({
  baseURL: 'http://localhost:3000', // || process.env.base,
  headers: {
    'X-Custom-Header': 'foobar',
    Authorization: `Bearer ${getToken()}`
  }
})

export default instance
