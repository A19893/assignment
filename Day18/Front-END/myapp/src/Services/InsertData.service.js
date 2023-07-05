import axios from 'axios'
export const insertData=(data)=>{
     return axios.post("http://localhost:5000/insertData", { data: data,});
}