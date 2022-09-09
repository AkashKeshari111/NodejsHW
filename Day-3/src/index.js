
//import 
const express= require("express");
const movieRouter=require("./Routes/Movie.router")

// create server
const app= express();

app.use(express.json())

app.use("/movie",movieRouter)

//listen 

app.listen(8080,(req,res)=>{
    console.log("Server start at port no. 8080")
})