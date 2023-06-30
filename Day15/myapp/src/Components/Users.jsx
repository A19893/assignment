import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Config/Firebase";
import { useSelector } from "react-redux";
const Users = (props) => {
  const [Users, setUsers] = useState(null);
  const currentEmail = useSelector(
    (state) => state.authentication.currentUsername
  );
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDocs(collection(db, "Users"));
      const users = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setUsers(users);
    };
    fetchData();
  }, []);
  return (
    <>
      <h3 style={{ color: "rgb(169, 170, 177)", height: "50px" }}>FRIENDS</h3>
      {Users?.map((item, idx) => {
        if (
          item.email !== currentEmail &&
          item.name.toLowerCase().includes(props.val.toLowerCase())
        )
          return (
            <>
              <div className="user" key={idx}>
                <div className="userimage">
                  <img
                    src="https://img.freepik.com/free-photo/young-man-wearing-blue-outfit-looking-confident_1298-291.jpg?size=626&ext=jpg&uid=R106874875&ga=GA1.2.2042889475.1686818793&semt=ais"
                    alt="Avatar"
                    className="Avatar"
                  />
                  {/* {item.status?<div style={{position:"absolute",width:"10px",height:"10px",borderRadius:"40px",backgroundColor:"green",right:"10px",bottom:"32px"}}></div>:<div style={{position:"absolute",width:"10px",height:"10px",borderRadius:"40px",backgroundColor:"red",right:"10px",bottom:"32px"}}></div>} */}
                </div>
                <div className="userdetails">
                  <span
                    style={{
                      margin: "0px",
                      fontSize: "18px",
                      fontWeight: 500,
                      paddingTop: "0px",
                    }}
                  >
                    {item.name}
                  </span>
                </div>
              </div>
            </>
          );
      })}
    </>
  );
};

export default Users;
