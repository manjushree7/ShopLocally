const express = require("express")
const mongoose = require("mongoose")
const app = express()

mongoose.connect("mongodb+srv://mstmanjushree007:<EDO8irljkMpXeaQL>@fypcluster0.n2xka.mongodb.net/dbmanjushree")

app.listen("3001", ()=>{
    console.log("Server is Running !!");
})
