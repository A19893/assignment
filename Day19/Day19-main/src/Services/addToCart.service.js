import axios from "axios"
export const addToCart=(item,userId)=>{
    return axios.post("http://localhost:5000/addToCart",{item,userId})
}