import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData : null,
    loading : null,
    error : null,
    userImg : ''
}


const userDateSlice = createSlice({
    name : "userData",
    initialState,
    reducers:{
        setUserData : (state , action)=>{
            state.userData = action.payload
        },
        clearUserData: (state)=>{
            state.userData=null
        },
        updatePicture:(state, action)=>{
            state.userImg= action.payload
        }
    }
})


export const {setUserData,clearUserData,updatePicture} = userDateSlice.actions
export default userDateSlice.reducer