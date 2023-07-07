import axios from "axios";
export const clearLocations=async(id)=>{
    return axios.get(`http://localhost:5000/clearLocations`);
}