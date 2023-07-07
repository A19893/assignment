import React, { useEffect,useState } from 'react'
import { getLocation } from '../Services/getLocations'
 import { searchItems } from '../Services/selectItems.service';
const Home = () => {
    const[locations,setLocations]=useState(null);
    const[selectedLocation,setSelectedLocation]=useState(null);
    useEffect(()=>{
     const fetchData=async()=>{
       const res=await getLocation();
       setLocations(res.data)
       console.log(res,"locations")
     }
     console.log(locations);
     fetchData();
    },[])
    const searchHandler=async(data)=>{
      await searchItems(data._id)
    }
    const clearHandler=async()=>{
        setSelectedLocation("")
    }
  return (
    <>
    <h1>Locations</h1>
    Enter Range<input type="number" placeholder="Enter Km's"/>
    <button onClick={searchHandler}>Search</button><br/>
    {
        selectedLocation?.placeName
    }
    <button onClick={clearHandler}>Clear</button>
    {
        locations?.map((item,idx)=>{
            return(
                <div style={{display:'flex'}}>
                    {item.placeName}
                    <button onClick={()=>setSelectedLocation(item)}>Select</button>
                </div>
            )
        })
    }
    </>
  )
}

export default Home