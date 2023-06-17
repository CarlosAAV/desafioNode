const fs = require("fs")

/*const citas =[

]

fs.writeFileSync("citas.json", JSON.stringify(citas))*/

const registrar = (nombre,edad,animal,color,enfermedad) =>{

    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'))
    const nuevaCita = {
        nombre: nombre,
        edad: edad,
        animal: animal,
        color: color,
        enfermedad: enfermedad
    };
    citas.push(nuevaCita)
    fs.writeFileSync("citas.json", JSON.stringify(citas))

}

const leer =() =>{
 const readArchivo = JSON.parse(fs.readFileSync('citas.json', 'utf-8'))
 console.log(readArchivo)
}

module.exports = {registrar, leer}