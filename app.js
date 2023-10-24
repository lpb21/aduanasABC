const express = require('express')

const service = require('./src/service')



const app = express();
const PORT = 3002;

// permite recibir datos desde nuestros clientes
app.use(express.json())


app.get('/',(req, res)=>{
    // res.json({
    //     message:'Hola desde express'
    // })
    res.json({
        message: "lista de usuarios",
        body: service.getUsers(),
    })
});

//se define un parametro en la ruta base
//se recibe un numero que es el id
app.get('/:id',(req, res) => {
    //se obtiene el id de los parametros de ruta en forma de objeto
        //let id = req.params;
    //asi se obtiene solo el id de tipo entero
        //let id = req.params.id;
    //se obtiene de params el id con desestructuracion de objetos y que todo lo tome del request
    let { params : { id }, } = req;
    //obtener un user en base al servicio pasandole el id getuser en plural
    let user = service.getUser(id);
    //console.log(32, id)
    res.json({
        message: `Usuario ${id}`,
        body: user,
});
});



//listen recibe 2 parametros
    //1: un puerto
    //2: una funcion callback que nos avisa cuando el servidor este arriba
app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
})