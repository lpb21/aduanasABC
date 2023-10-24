const express = require('express')
const service = require('./src/service')

const app = express();
const PORT = 3002;

// permite recibir datos desde nuestros clientes
app.use(express.json())

app.get('/',(req, res)=>{
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

// Creacion de usuario enviandole el id
app.post('/',(req, res)=>{ 
    // se desestructura el body desde request y se le da un nombre (newUser)
   let { body : newUser } = req;
   //usar el servicio para agregar ese nuevo elemnto en el arreglo
    let user = service.createUser(newUser)
   //se le responde al cliente que sus datos han sido agregados
   res.status(201).json({
    message: "el usuario fue creado",
    body: user,
   })
})

//actualiza el usuario
app.put('/:id',(req,res)=>{
    //extrae el valor del parámetro id de la URL
    let { params : { id }} = req;
    // extrae el cuerpo de la solicitud PUT
    let { body : newUpdate } = req;
    //Esta función intentará encontrar el usuario con el id proporcionado 
    //y actualizar sus datos con newUpdate
    let updateUser = service.updateUser(id,newUpdate)

    if (updateUser !== null) {
        //Si es diferente de null, significa que el usuario fue encontrado y actualizado
        //devuelve un código de estado 200
        res.status(200).json({
            message: `El usuario con ID: ${id} fue actualizado`,
            body: updateUser,
        });
        //si updateUser es null, significa que el usuario no fue encontrado
    } else {
        res.status(404).json({
            message: `Usuario con ID: ${id} no encontrado`,
        });
    }
})

//eliminacion de usuarios
app.delete('/:id',(req,res)=>{
    let { params : { id }} = req;
    let deleteUser = service.deleteUser(id)
    res.status(200).json({
        message: `El usuario con ID: ${id} fue !ELIMINADO!`,
        body: deleteUser,
    });
})

//listen recibe 2 parametros
    //1: un puerto
    //2: una funcion callback que nos avisa cuando el servidor este arriba
app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
})