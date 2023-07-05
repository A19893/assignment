import React from 'react'
import {useNavigate} from 'react-router-dom'
const Logout = () => {
    const navigate=useNavigate();
    const logoutHandler=()=>{
        navigate("/login")
    }
  return (
    <>
    <div onClick={logoutHandler} className='logout'>Logout</div>
    </>
  )
}

export default Logout