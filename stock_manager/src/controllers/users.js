const {request, response} = require('express');

const getMessage = (req, res) =>{
    res.send("hello from the users controller!");

}

module.exports = {getMessage};