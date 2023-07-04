import React, { useState } from "react";
import Users from "./Users";
const SearchBar = () => {
  // This val state is used to set the suser value to search.
  const [val, setVal] = useState("");
  console.log("search bar page")
  return (
    <div className="searchBar">
      <div className="homeLogo">
        <img
          className="search-Img"
          src="https://i.pinimg.com/564x/8a/76/96/8a7696cb9ac02d0ea26945a8e563b04b.jpg"
          alt="Missing"
        />
        <div className="searchBarField">
          <input
            type="text"
            style={{ fontWeight: "bolder", border: "black" }}
            placeholder="Find a User.."
            onChange={(e) => setVal(e.target.value)}
          />
        </div>
      </div>
      <div
        style={{ marginTop: "10px", height: "6px", backgroundColor: "white" }}
      ></div>
      {/* Users Component will display list of all users. */}
      <Users val={val} />
    </div>
  );
};

export default SearchBar;
