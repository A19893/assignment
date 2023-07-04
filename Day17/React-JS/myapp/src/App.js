import React from 'react'
import Signup from "./Components/Signup"
import Home from "./Components/Home"
import Login from './Components/Login'
import {Route,Routes} from "react-router-dom"
const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Signup/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/logout" element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App