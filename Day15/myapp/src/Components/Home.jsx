import React from "react";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar"
import Comments from "./Comments";
import Posts from "./Posts"
const Home = () => {
  return (
    <>
    <div className="homeContainer">
      <SearchBar/>
      <NavBar/>
      <Comments/>
      <Posts/>
    </div>
    </>
  );
};
export default Home;
