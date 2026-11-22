import {createSlice} from "@reduxjs/toolkit"
const initialeState={
  ctp:0
}
const calcSlice=createSlice({
  name:"calc",
  initialState:initialeState,
  reducers:{
    Add:(state,action)=>{
      const {Firstnumber,Secondnumber}=action.payload
      const sum=Number(Firstnumber)+Number(Secondnumber)
      state.ctp=sum
    },
    Subs:(state,action)=>{
      const {Firstnumber,Secondnumber}=action.payload
      const sub=Number(Firstnumber)-Number(Secondnumber)
      state.ctp=sub

    },
    Multi:(state,action)=>{
      const {Firstnumber,Secondnumber}=action.payload
      const mult=Number(Firstnumber)*Number(Secondnumber)
      state.ctp=mult
    }, 
    Mod:(state,action)=>{
      const {Firstnumber,Secondnumber}=action.payload
      const mod=Number(Firstnumber)/Number(Secondnumber)
      state.ctp=mod
    },

  }
})
export const {Add,Subs,Mod,Multi}=calcSlice.actions
export default calcSlice.reducer