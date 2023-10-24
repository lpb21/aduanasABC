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
    }

}