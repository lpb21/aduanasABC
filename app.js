const express = require('express')

const app = express();
const PORT = 3002;

// permite recibir datos desde nuestros clientes
app.use(express.json())

//listen recibe 2 parametros
    //1: un puerto
    //2: una funcion callback que nos avisa cuando el servidor este arriba
app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
})