import { doc, onSnapshot, query, where,collection } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import {useSelector} from "react-redux"
import { db } from '../Config/Firebase'
const Profile = () => {
    const [profile,setProfile]=useState("")
    const currentEmail=useSelector((state)=>state.authentication.currentUsername)
    useEffect(()=>{
            const q=query(collection(db,"Users"),where("email","==",currentEmail))
             const querySnapshot=onSnapshot(q,(snapshot)=>{
                setProfile(snapshot.docs[0].data())
             });
    },[])
  return (
    <div>Profile</div>
  )
}

export default Profile