import axios, { Axios } from 'axios'

const api: Axios = axios.create({
    baseURL:"https://www.divine-pride.net/api/database",
})

export default api;