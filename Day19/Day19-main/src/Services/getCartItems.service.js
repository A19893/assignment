import axios from "axios"
export const getCartItems=()=>{
return axios.get("http://localhost:5000/getCartItems")
}