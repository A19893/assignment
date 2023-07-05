import axios from 'axios'
export const getDataFromServer=(city)=>{
     return axios.get(`http://localhost:5000/getData/${city}`);
}