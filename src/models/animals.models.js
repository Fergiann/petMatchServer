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
//Vacunado
// Desparasitado
// Sano
// Esterilizado

// Microchip

const mongoose= require("mongoose");

const animalSchema = new mongoose.Schema({
  nombre: { type: String, required: true, trim: true },

  imagen: { type: String, required: true, trim: true },

  personalidad: { type: Array, required: true, trim: true },

  peso: { type: Number, required: true, trim: true },

  nacimiento: { type: String, required: true, trim: true },

  historia: { type: String, required: true, trim: true },

  ciudad: { type: String, required: true, trim: true },

  especie: { type: String, required: true, trim: true },

  raza: { type: String, required: false, trim: true },

  sexo: { type: String, required: false, trim: true },
},
{timeStamps:true}
)

const Animals = mongoose.model('Animals', animalSchema)

module.exports=Animals;

