const express = require("express");
const usersRoutes = require('./routes/users');

class Server {
    constructor(){
        this.app = express();
        this.port=3000;
        this.app.use(express.json());
        this.routes();
    }

    routes(){
        this.app.use('/users', usersRoutes);
    }

start(){
this.app.listen(this.port, ()=>{
    console.log("server listening on port " + this.port);
});
}

}

module.exports = {Server};



