const express = require("express");

const app = express();

app.get("/", (req, res)=>{
    res.status(400).send("hola mundo!");
});// para optener informacion

app.listen(3000, ()=>{
    console.log("servidor corriendo en https://localhost:3000");
});

app.post("/", (req, res)=>{
    res.status(200).send("hola desde post!");
});//crear un nuevo recurso o acceder a un nuevo recurso

app.put("/", (req, res)=>{
    res.status(400).send("hola desde put");
});//para actualizar un recurso completo es decir lo sustituye

app.patch("/", (req, res)=>{
    res.status(400).send("hola desde patch");
});//para actualizar un recurso este actualiza parcialmente

app.delete("/", (req, res)=>{
    res.status(400).send("hola desde delete");
});//para eliminar un recurso 
