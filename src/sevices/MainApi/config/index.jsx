import axios from 'axios'



const token = localStorage.getItem('token')

const baseApi = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  }
})


export default baseApi