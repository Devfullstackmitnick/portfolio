const mongoose=require("mongoose")
const express=require("express")
const userSchema=new mongoose.Schema({
      nom:{type:String, required:true},
      email:{type:String, required:true},
      telephone:{type:String, required:true},
      message:{type:String, required:true}
},{timestamps:true})

const Message=mongoose.model("Message",userSchema) 
module.exports=Message