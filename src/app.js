const express = require('express');

const app = express();


app.use("/test",(req,res)=> {
    res.send("1234 from test")
})
app.use("/home",(req,res)=> {
    res.send("from home calling 1234")
})
app.use("/",(req,res)=> {
    res.send("1234")
})

app.listen(3000, ()=>{
    console.log("sucessfully");
    
})