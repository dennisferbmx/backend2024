const express = require("express");

const app = express();

app.use(express.json());

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


app.post("/usuarios", (req, res)=>{
    const {nombre, apellido, email} = req.body;
if(!nombre || !apellido || !email){
    res.status(400).send({error: "necesitamos todo"})
    return;
}
if(usuarios.find((usuario)=>usuario.email=== email)){
    res.status(400).send({error: "El email ya existe"})
    return;
}
    usuarios.push({id: usuarios.length + 1, nombre, apellido, email});

    res.status(201).send("El usuario se agrego correctamente")
    
});

app.put("/usuarios/:id", (req, res) =>{
    const {nombre, apellido, email} = req.body;
    const id = +req.params.id

if(!nombre || !apellido || !email){
    res.status(400).send({error: "necesitamos todo"})
    return;
}

if(isNaN(id)){
    res.status(400).send({error:"el id debe ser un numero"});
        return;
    };


const usuario = usuarios.find((usuario)=> usuario.id == +id);

if(usuario == undefined){
    res.status(404).send({error: 'el usuario con id ${id} no existe'});
    return;
};

usuarios.forEach((usuarios) => {
    if(usuario.id === id){
        usuario.nombre = nombre;
        usuario.apellido = apellido;
        usuario.email = email;
    }
})

res.status(200).send("se actalizo bien")

});

app.patch("/usuarios/:id", (req, res) =>{
    
});

app.listen(3000, ()=>{
    console.log("servidor corriendo en https://localhost:3000");
});