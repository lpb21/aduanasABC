const data = require('./MOCK_DATA.json');

module.exports = {
    getUsers:()=> data,
    getUser: (id) => {
        //los params vienen siempre en string, se requiere pasarlo a numero
        let identificador = Number(id);
        // se puede usar filter o find y como es filter tomamos la primera coincidencia
        let user = data.filter((person) => person.id === identificador)[0];
        return user
    },
    createUser:(dataUser)=>{
        let newUser ={
            id: data.length + 1,
            ...dataUser
        } 
        // agregando el usuario al array en memoria
        data.push(newUser);
        // retorna el usuario
        return newUser;
    },

    updateUser:(id,dataUser)=>{
        //convierte el id a un número y toma el dia enviado en la funcion
        let identificador = Number(id);
        //busca el índice del usuario con el id proporcionado en el array data
        let userIndex = data.findIndex(user => user.id === identificador)
        //console.log(15, id,dataUser, userIndex)
        //Si userIndex es diferente de -1, significa que el usuario fue encontrado
        if (userIndex !== -1){
            //console.log(21,{ ...data[userIndex]})
            console.log(22,{...dataUser})
            // Actualizar el usuario encontrado con los nuevos datos
            //generando una copia del usuario encontrado en esa posicion
            //luego crea una copia de los datos enviados en el put
            //se combinan en un solo objeto actualizando el usuario encontrado con los nuevos datos
            data[userIndex] = { ...data[userIndex], ...dataUser };
        }else{
            // Devolver null o un valor indicativo de que el usuario no fue encontrado
        return null;
        }
    },

}