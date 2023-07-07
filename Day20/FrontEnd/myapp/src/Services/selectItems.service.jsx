import axios from "axios";
export const searchItems=async(id)=>{
    return axios.get(`http://localhost:5000/searchItems/${id}`);
}