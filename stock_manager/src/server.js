const express=require("express");
const usersRoutes=require('./routes/users');

//staff
const staffRoutes = require('./routes/staff');

//Products_suppliers
const products_suppliersRoutes = require('./routes/products_suppliers');

//Products
const products = require('./routes/products');

//Suppliers
const suppliers = require('./routes/suppliers');

class Server{
    constructor (){
        this.app=express();
        this.port=3000;
        this. middlewares();
        //this.app.use(express.json()); //Metodo express, es un middleware
        this.routes();
    }


    middlewares(){
        this.app.use(express.json());
    }

    /*routes (){
        this.app.get("/", (req, res)=> {
            res.send('Hello world!');
        });
    }*/

    routes(){
        this.app.use('/users', usersRoutes);

        //staff
        this.app.use('/staff', staffRoutes);

        //products_suppliers
        this.app.use('/products_suppliers', products_suppliersRoutes);
    
        //Products
        this.app.use('/products', products);

        //suppliers
        this.app.use('/suppliers', suppliers);
    }


start() {
    this.app.listen(this.port, ()=>{
        console.log('Server listening on port ' + this.port);
    });
}
}

module.exports={Server};