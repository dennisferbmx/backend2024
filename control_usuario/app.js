const express = require("express");

const app = express();

app.get("/usuarios", (req, res)=>{
   const usuarios = [
    {
        id: 1,
        nombre: "dennis",
        apellido: "jimenez",
        email: "dfjh88@gmail.com",
    },
    {
        id: 2,
        nombre: "fernando",
        apellido: "hoffman",
        email: "fer100@gmail.com",
    },
   ];
   res.status(200).send(usuarios);
});

app.listen(3000, ()=>{
    console.log("servidor corriendo en https://localhost:3000");
});