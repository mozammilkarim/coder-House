require("dotenv").config();
const express=require("express");
const DbConnect = require("./database");
const app=express()
const PORT= process.env.PORT|| "3001";

DbConnect();
const Router=require("./routes")
app.use(express.json())// for using json data
app.use(Router)// for delegating the route work

app.get("/",(req,res)=>{
    res.send("Hello from my side")
})
app.listen(PORT,()=>
    `listening on port 3001`
)