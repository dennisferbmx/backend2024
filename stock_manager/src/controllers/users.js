const {request, response} = require('express');
const pool = require('../db/connection');
const { userQueries } = require('../models/users')

//const users = [

//{id: 1, name: 'Dennis'},
//    {id: 2, name: 'Fernando'},
//    {id: 3, name: 'shopy'},
//];

const getAll = async (req = request, res = response) =>{
    let conn;
    try{
        conn = await pool.getConnection();
        const users = await conn.query(userQueries.getAll);

        res.send(users);
    }catch(error){
        res.status(500).send(error);
        return;
    }finally{
        if (conn) conn.end();
    }
}

const getUserById = async(req = request, res = response) =>{
    const {id} = req.params;
    if (isNaN(id)){
        res.status(400).send('Invalid ID');
        return;
    }

    let conn;
    try{
        conn = await pool.getConnection();
        const user = conn.query(userQueries.getUserById, [+id]);
        
        if (!user){
        res.status(404).send('user not found');
        return;
    }

     res.send(user);

    }catch(error){
        res.status(500).send(error);
    }finally{
        if(conn) conn.end();
    }


    

   

}

const postUser = (req = request, res = response) => {
    const {name} = req.body;

    if(!name){
        res.status(400).send("bad request: the name fild is missing.");
    }

    const user = users.find(user => user.name === name);

    if(user){
        res.status(409).send("user alreay ")
    return; 
}

users.push({id: users.length + 1, name});
res.send("user create succesfully")
}

const updateUser = (req = request, res = response) => {
    const {id} = req.params;
    const {name} = req.body;

    if (isNaN(id)){
        res.status(400).send('Invalid ID');
        return;
    }

    const user = users.find(user => user.id === +id);

    if (!user){
        res.status(404).send('user not found');
        return;
    }

    users.forEach(user => {
        if(user.id === +id) {
            user.name = name;
        }
    });
    res.send("user updated succerfully");
}

const deleteUser = (req = request, res = response) => {
    const {id} = req.params;
    if (isNaN(id)){
        res.status(400).send('Invalid ID');
        return;
    }

    const user = users.find(user => user.id === +id);

    if (!user){
        res.status(404).send('user not found');
        return;
    }

    users.splice(users.findIndex ((user)=>user.id===+id),1);
    res.send('User deleted');
  };

module.exports = {getAll, getUserById, postUser, updateUser, deleteUser};