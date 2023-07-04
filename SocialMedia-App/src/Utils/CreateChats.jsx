import { addDoc, collection } from "firebase/firestore";
import { db } from "../Config/Firebase";

//CreateChats func will create a chats collection in which document will have senderId,chatRoomId and reciver-Id.
export const createChats = async (senderid,chatRoomId, recieverid) => {
    const docRef = await addDoc(collection(db, "Chats"), {
      chatRoomId: chatRoomId,
      senderid: senderid,
      reciverid: recieverid,
      messages: [],
    });
    // console.log(docRef.id);
  };