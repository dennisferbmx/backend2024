const { createServer } = require("http");

const server = createServer((req, res)=> {
    res.write("hola mundo");
    res.end();
});

server.listen(8080);
consol.log("servidor web iniciado en 8080")