const express = require("express");

const app = express();

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
app.get("/usuarios", (req, res)=>{
   res.status(200).send(usuarios);
});

app.get("/usuarios/:id", (req, res)=>{

    const {id} = req.params;
    const usuario = usuarios.find((usuario)=> usuario.id == +id);
   
    res.status(200).send(usuario);
}
);
app.listen(3000, ()=>{
    console.log("servidor corriendo en https://localhost:3000");
});