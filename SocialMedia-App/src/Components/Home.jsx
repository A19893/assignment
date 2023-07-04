import React from "react";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar"
import Comments from "./Comments";
import Posts from "./Posts"
import Chats from "./Chats"
import { useSelector } from "react-redux";
const Home = () => {
  const chats=useSelector((state)=>state.authentication.showChats)
  console.log("home page",chats);
  return (
    <>
    <div className="homeContainer">
      {/* This component will help us to search users */}
      <SearchBar/>
      {/* This component is a navBar which includes chat options func,logout func,update func,home button */}
      <NavBar/>
      {/* Thids component will show comments on a specific post */}
      <Comments/>
      {/* There is conditional rendering if u select chats it will show chat component else or by default it will be homePage only */}
    {chats?<Chats/>:<Posts/>}
    {console.log("home")}
    </div>
    </>
  );
};
export default Home;
