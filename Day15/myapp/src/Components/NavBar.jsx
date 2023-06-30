import React,{useState} from 'react'
import { LogoutOutlined, HomeOutlined,MessageOutlined,ProfileOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { removeAuthentication } from "../Features/AuthSlice";
const NavBar = () => {
    //this func will select value from menu bar and perform a specific actions
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    //this func will remove authenticated user and redirect it to login page
    const logOutUser = async () => {
        dispatch(removeAuthentication());
        navigate("/login");
      };
    const items = [
        {
          
          key: 'home',
          icon: <HomeOutlined style={{fontSize:"30px",paddingLeft:"10px"}}/>,
        },
        {
          key: 'setting',
          icon:<MessageOutlined style={{fontSize:"30px"}}/>
        },
        {
            key: 'profile',
            icon:<ProfileOutlined style={{fontSize:"30px"}} onClick={()=>navigate("/profile")}/>
        },
        {
          
            key: 'logout',
            icon: <LogoutOutlined style={{fontSize:"30px"}} rotate="180" onClick={logOutUser}/>
        }
      ];
    const [current, setCurrent] = useState('mail');
    const navigate=useNavigate();
    const dispatch=useDispatch();
  return (
   <>
   <div className="navBar">
   <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={{backgroundColor:"rgb(245, 249, 250)",borderBottomLeftRadius:"25px",borderBottomRightRadius:"25px"}}/>
   </div>
   </>
  )
}

export default NavBar