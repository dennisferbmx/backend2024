const express = require('express')
const app = express()

app.get('/', function ( req, res){
    res.send('hola mundo')
});

app.get('/loquesea', function ( req, res){
    res.send('lo que sea ')
});

app.listen(3000);