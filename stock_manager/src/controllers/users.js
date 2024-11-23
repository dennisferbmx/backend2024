const {request, response} = require('express');
const bcrypt = require('bcrypt')
const pool = require('../db/connection');
const { usersQueries } = require('../models/users')

const saltRounds = 10;
//const users = [

//{id: 1, name: 'Dennis'},
//    {id: 2, name: 'Fernando'},
//    {id: 3, name: 'shopy'},
//];

// paraObtener todos los usuarios
const getAllUsers = async (req = request, res = response) => {
 let conn; 
try{
  conn = await pool.getConnection();
  const users= await conn.query(usersQueries.getAll );
  
  res.send(users);

} catch (error){
  res.status(500).send(error);
  return;
} finally{
 if (conn) conn.end();
}
};

// para Obtener un usuario por ID
const getUserById = async (req = request, res = response) => {
  const { id } = req.params; 

  if (isNaN(id)) {
    res.status(400).send('Invalid ID');
    return;
  }

  let conn;
  try{
    conn = await pool.getConnection();
    const user = await conn.query(usersQueries.getById, [+id]);

    if (user.length === 0) {
      res.status(404).send('User not found');
      return;
    }

    res.send(user);
  }catch (error) {
    res.status(500).send(error);
  }finally{
    if(conn) conn.end();
  }

};

// paraAgregar un nuevo usuario
const addUser = async (req = request, res = response) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    res.status(400).send('Bad request. The Name field is missing');
    return;
  }

let conn;  
  try{
    conn = await pool.getConnection();
    const user = await conn.query(usersQueries.getByUsername, [username]);

    if(user.length > 0 ){
      res.status(409).send('Username already exists');
      return;
    }

    const hashPassword = await bcrypt.hash(password, saltRounds);
    const newUser = await conn.query(usersQueries.create, [username, hashPassword, email]);
    
    if(newUser.affectedRows === 0){
      res.status(500).send('User could not be created');
      return;
    }
    //console.log(newUser);

    res.status(201).send("user created succesfully"); 

  }catch (error){
    res.status(500).send(error);
    return;
  }finally{
    if (conn) conn.end();
  }
};

const loginUser = async(req = request, res = response) => {
  const {username, password} = req.body;

  if (!username || !password){
    res.status(400).send('Username and Password are mandatory!');
    return;
  }

let conn;
try{
  conn = await pool.getConnection();

    const user = await conn.query(usersQueries.getByUsername,[username]);
    if(user.length === 0){
      res.status(400).send('Bad username or password');
      return;
    }

    const passwordMatch = await bcrypt.compare(password, user[0].password);
    if(!passwordMatch){
      res.status(403).send('Bad username or password');
      return;
    }
    res.send('Loged in!');
  }catch(error){
    res.status(500).send(error);
  }finally{
    if(conn) conn.end();
  }
}


// Actualizar un usuario existente
const updateUser = async (req = request, res = response) => {
  const {id } = req.params;
  const {username} = req.body;

  if (isNaN(id) || !username) {
    res.status(400).send('Invalid request');
    return;
  }

  let conn;  
  try{
    conn = await pool.getConnection();

  const user = await conn.query(usersQueries.getById,[+id]);
  if (user.length === 0) {
    res.status(404).send('User not found');
    return;
  }

  const result = await conn.query(usersQueries.update,[username,+id]);
  if (result.affectedRows === 0) {
    res.status(500).send('not be updaed');
    return;
  }

  res.send('User updated');
}catch(error){
  res.status(500).send(error);
}finally{
  if (conn) conn.end();
}
};

// Eliminar un usuario
const deleteUser = async (req = request, res = response) => {
  const { id } = req.params;

  if (isNaN(id)) {
    res.status(400).send('Invalid request');
    return;
  }

  let conn;
  try{
    conn = await pool.getConnection();
    
    const user = await conn.query(usersQueries.getById,[+id]);
    if (user.length ===0){
      res.status(404).send('User not found')
      return;
    }

    const deletedUser = await conn.query(usersQueries.delete, [+id]);

    if (deletedUser.affectedRows === 0) {
      res.status(500).send('User could not be deleted');
      return;
    }

    res.send("user delete succerfully"); // 204 No Content
  } catch (error) {
    res.status(500).send(error);
    return;
  } finally {
    if (conn) conn.end();
  }
};

module.exports = { getAllUsers, getUserById, addUser, loginUser, updateUser, deleteUser };


