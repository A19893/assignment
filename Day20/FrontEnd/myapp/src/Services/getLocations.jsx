import axios from "axios";
export const getLocation=async()=>{
    return axios.get("http://localhost:5000/getLocations");
}