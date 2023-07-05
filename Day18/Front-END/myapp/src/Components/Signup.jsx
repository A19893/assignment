import React,{useState} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { addAuthentication } from "../Features/AuthSlice";
import { useDispatch } from "react-redux";
const Signup = () => {
  const[name,setname]=useState('');
  const[password,setPassword]=useState('');
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const clickHandler=async(e)=>{
    e.preventDefault();
    try{
      const res=await axios.post("http://localhost:5000/addUser",{name:name,password:password,id:Date.now()})
      console.log(res)
      if(res.status===200){
        dispatch(addAuthentication());
        navigate("/home")
      }
    }
    catch(err){
      console.log(err)
       alert(err.response.data)
    }
  }
  return (
    <div className="container">
    <div className="signupcontainer">
      <div className="signupimgcontainer">
        <img className="signup-img"src="https://img.freepik.com/premium-vector/happy-people-use-mobile-smartphone_165488-4717.jpg?w=1380" alt="misssing"/>
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
        <button onClick={clickHandler}>Sign In</button>
        <Link to="/login" className="links">Already a Registered User?</Link>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Signup;
