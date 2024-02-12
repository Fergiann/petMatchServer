// Nombre
// Imagen
// Personalidad
// Peso
// Fecha de nacimiento
// Historia
// Ciudad
// Especies
// Raza
// Edad
// Sexo
// Tamaño

const { SchemaTypes } = require("mongoose");

const mongoose = new mongoose.Schema({
  nombre: { type: string, required: true, trim: true },

  imagen: { type: string, required: true, trim: true },

  personalidad: { type: array, required: true, trim: true },

  peso: { type: number, required: true, trim: true },

  nacimiento: { type: string, required: true, trim: true },

  historia: { type: string, required: true, trim: true },

  ciudad: { type: string, required: true, trim: true },

  especie: { type: string, required: true, trim: true },

  raza: { type: string, required: false, trim: true },

  sexo: { type: string, required: false, trim: true },
},
{timeStamps:true}
)

const Animals = mongoose.model('Animals', animalSchema)

module.exports=Animals;

