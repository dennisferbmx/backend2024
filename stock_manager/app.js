const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Hola");
 });

 app.listen(3000, ()=>{
    console.log("example app listening on port 3000! ");
});