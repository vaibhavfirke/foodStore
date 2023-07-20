const express = require("express");
const cors=require("cors")
const app=express();

app.use(cors({
    origin:"*"
}));

app.listen(4001,()=>{
    console.log("port is running on 4001")
})

