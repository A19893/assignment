import axios from "axios";
export const placeOrder=(items)=>{
    return axios.post("http://localhost:5000/placeOrder",{items})
}