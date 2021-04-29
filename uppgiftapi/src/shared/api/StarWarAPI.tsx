
import Axios from 'axios'
const API_URL = 'https://swapi.dev/api'

const StarWarAPI = Axios.create({
    baseURL: API_URL,
    headers: {'Content-Type': 'application/json'}
}) 

export default StarWarAPI
