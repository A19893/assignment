import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddCommentIcon from '@mui/icons-material/AddComment';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../Config/Firebase';
import { useDispatch } from 'react-redux';
import { showComments } from '../Features/AuthSlice';
import { useSelector } from "react-redux";
import { AddNotification } from './Notifications';
const DisplayPost = (props) => {
  console.log("display post page")
  const currentUser=useSelector((state)=>state.authentication.currentUser);
    const dispatch=useDispatch();
    const likeBtn=async(item)=>{
      console.log("item",item);
    const data=await AddNotification(currentUser,item.currentEmail,"like")
    const postRef=doc(db,"Posts",item.id);
    await updateDoc(postRef,{
        likes:item.likes+1
    })
    }
    const cmntBtn=(item)=>{
     dispatch(showComments(item.id))
    }
  return (
    <div className="posts">
    <div className="postDisplay">
      {props.Posts?.map((item, idx) => {
        return (
          <div key={idx} className="post">
            <div className='userTitle'>{item?.username}</div>
            <img src={item.url} alt="Missing" /><br/>
            <div className="likes-comment">{item?.likes} Likes  {item?.comments.length} Comments</div>
            <div className="post-icons">
                <FavoriteIcon fontSize='large' onClick={()=>likeBtn(item)}/>
                <AddCommentIcon  fontSize='large' onClick={()=>cmntBtn(item)}/>
            </div>
            <div className="caption"><p style={{margin:0}}>{item.username}</p> {item.caption}</div>
          </div>
        );
      })}
    </div>
    <div className="addIcon">
      <AddCircleIcon
        onClick={props.showModal}
        fontSize="large"
        style={{ cursor: "pointer" }}
      />
    </div>
  </div>
  );
}
export default DisplayPost;
