const fs = require("fs")  
const {registrar, leer} = require("./operaciones")  

const [nombre,edad,animal,color,enfermedad]=process.argv.slice(3)
const operacion = process.argv[2]
 

if(operacion === "registrar"){
    registrar(nombre, edad, animal, color, enfermedad)
    }

    if(operacion === "leer"){
    leer()
    }

