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

    if(isNaN(id)){
        res.status(400).send({error:"el id debe ser un numero"});
            return;
        };


    const usuario = usuarios.find((usuario)=> usuario.id == +id);

    if(usuario == undefined){
        res.status(404).send({error: 'el usuario con id ${id} no existe'});
        return;
    };
   
    res.status(200).send(usuario);
});//END POINT

app.listen(3000, ()=>{
    console.log("servidor corriendo en https://localhost:3000");
});