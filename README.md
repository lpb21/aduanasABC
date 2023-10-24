# aduanasABC

CRUD de prueba hecho con Node

## Explicando



## Tabla de Contenido
1. [General Info](#informacion-general)
2. [Tecnologias](#tecnologias-usadas)
3. [Instalacion](#instalacion)
4. [FAQs](#faqs)
5. [Versionado](#versionado)
## Informacion General
***
CRUD a una archivo JSON realizado con Node JS. 

## Tecnologias usadas 
***
Tecnologias usadas en este proyecto:
* [Postman](https://www.postman.com/downloads/): Version 10.19.2 
* [Node Js](https://nodejs.org/es/blog/release/v16.14.2): Version 16.14.2 
* [Editor de codigo VS code](https://code.visualstudio.com/download): Version 1.70.1
* [express](https://www.npmjs.com/package/express): Version 4.18.2
* [nodemon](https://www.npmjs.com/package/nodemon): Version 3.0.1

## Instalacion
***
Como instalar: 
```
$ git clone https://github.com/lpb21/aduanasABC.git
$ npm i
$ npm run dev
```
Ejecutando los comandos anteriores la aplicacion debe iniciar sin problema

## FAQs
***
Preguntas frecuentes
1. **Obtener usuarios?**
Para obtener los usuarios se puede usar postman y apuntar a la url: http://localhost:3002 por metodo _**GET**_ ya que esta url fue la definida por defecto _italic words_. 
2. **Agregar Usuario?**: 
Para agregar cualquier usuario se debe seguir la misma estructura del JSON, que se encuentra en el archivo **MOCK_DATA.json** y se apunta a la url http://localhost:3002 enviandole el "ID" en el cuerpo del objeto por medio del metodo _**POST**_

3. **Actualizar usuario?**
Para ctualizar cualquier usuario se debe hacer por medio del metodo _**PUT**_ en postman a la url "http://localhost:3002/?" en donde en "?" se le envia el numero ID.
4. **Eliminar usuario?**
Para eliminar cualquier usuario se debe hacer por medio del metodo _**DELETE**_ en postman a la url "http://localhost:3002/?" en donde en "?" se le envia el numero ID

## Versionado

Use [Github](https://github.com/lpb21/aduanasABC/tree/main) para el versionado. Para todo el historial disponible, mira los [commits en este repositorio](https://github.com/lpb21/aduanasABC/commits/main).