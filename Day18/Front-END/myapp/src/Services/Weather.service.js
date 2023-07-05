import axios from 'axios'
export const getData=(city)=>{
    const key="76e25b263cda23fffc3af28c053d6ee0"
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
     return axios.get(url)
}
