import { db } from "../Config/Firebase";
import { arrayUnion,doc,updateDoc,collection,getDocs } from "firebase/firestore";

export const AddNotification=async(currentUser,uploadedByEmail,type)=>{
  console.log("Notification page")
  const userRef = collection(db, "Users");
    const data = await getDocs(userRef);
    const users = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    const filteredData = users.filter((item) => {
      return item.email === uploadedByEmail;
    });
    console.log("data jiski post hai",filteredData[0]);
    // setUser(filteredData[0]);
    // if(user){
    const notificationRef=doc(db,"Users",filteredData[0]?.id)
    console.log(notificationRef);
    await updateDoc(notificationRef,{notification:arrayUnion({
      postUploadedBy:uploadedByEmail,
      reactionBy:currentUser,
      type:type,
      time:Date.now()
    })})
    return filteredData[0];
  // }
}