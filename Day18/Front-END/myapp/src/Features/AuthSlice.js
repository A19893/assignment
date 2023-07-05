import { createSlice } from "@reduxjs/toolkit";
const initialState={
    isAuth:false
}
export const AuthSlice=createSlice({
    name:'Authentication',
    initialState:initialState,
    reducers:{
        addAuthentication:(state,action)=>{
            state.isAuth=true;
        }
    }
})
export const {addAuthentication}=AuthSlice.actions;
export default AuthSlice.reducer;