const {request, response} = require('express');

const users = [
    {id: 1, name: 'Dennis'},
    {id: 2, name: 'Fernando'},
    {id: 3, name: 'shopy'},
];

const getAll = (req = request, res = response) =>{
    res.send(users);

}

const getById = (req = request, res = response) =>{
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

    res.send(user);

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

module.exports = {getAll, getById, postUser, updateUser, deleteUser};