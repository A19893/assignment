import React,{useState} from 'react'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { addAuthentication } from "../Features/AuthSlice";
import { useDispatch } from "react-redux";
const Login = () => {
  const[name,setname]=useState('');
  const[password,setPassword]=useState('');
  const navigate=useNavigate();
  const dispatch=useDispatch();
   const clickHandler=async(e)=>{
     e.preventDefault();
     try{
        const data= await axios.post("http://localhost:5000/checkUser",{name:name,password:password})
        console.log("data",data)
        if(data.status===200){
          dispatch(addAuthentication());
        navigate("/home");
        }
        if(data.status===204){
            alert("User not found")
          }
     }
     catch(err){
        console.log(err)
        alert(err.response.data)
     }
   }
  return (
    <>
   <div className="container">
        <div className="signupcontainer">
          <div className="signupimgcontainer">
            <img className="signup-img"src="https://img.freepik.com/free-vector/speech-bubbles-collection_23-2147512511.jpg?w=826&t=st=1687777346~exp=1687777946~hmac=651a8f0f208fb40ba34a37b327fb6824ceba38ad3b61c81b9016b04b3d5d9adb" alt="misssing"/>
          </div>
          <div className="signupinput">
            <div className="inpdetails">
            <input
          type="name"
          placeholder=" Name.."
          onChange={(e) => setname(e.target.value)}
        />
            <input
              type="password"
              placeholder=" Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={clickHandler}>Login</button>
            <Link to="/" className="links">Not a Registered User?</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login