import { addDoc, collection } from "firebase/firestore"
import { db } from "../Config/Firebase"

export const CreatePost=async(data)=>{
    console.log("create post page")
    const postCollectionRef=collection(db,"Posts");
    try{
        await addDoc(postCollectionRef,data);
    }catch(error){
        console.log(error);
    }
}