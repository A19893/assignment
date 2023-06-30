import {createSlice} from "@reduxjs/toolkit"
const initialState={
    isAuth:false,
    currentUsername:null
}
export const AuthSlice=createSlice({
    name:"Authorization",
    initialState:initialState,
    reducers:{
      authenticateUser:(state,action)=>{
        state.isAuth=true;
        state.currentUsername=action.payload;
      },
      removeAuthentication:(state,action)=>{
        state.isAuth=false;
        state.currentUsername=null;
      }
    }
})
export const {authenticateUser,removeAuthentication}=AuthSlice.actions;
export default AuthSlice.reducer
