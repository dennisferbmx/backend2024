const express = require("express");

const app = express();

app.get("/", (req, res)=>{
    res.status(400).send("hola mundo madafaca!");
});

app.listen(3000, ()=>{
    console.log("servidor corriendo en https://localhost:3000");
});