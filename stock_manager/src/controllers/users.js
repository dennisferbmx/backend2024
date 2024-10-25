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

module.exports = {getAll, getById};