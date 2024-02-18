const mongoose = require("mongoose")
const Animal = require("../models/users.models");
const User = require("../models/users.models");
require("dotenv").config();

const arrayUsers = [
    
    {
    "nombre": "Yoel",
    "apellidos": "Rodriguez",
    "misAnimales": [],
    "image": "https://media.licdn.com/dms/image/D4D35AQGKMzxV5VjYlQ/profile-framedphoto-shrink_400_400/0/1706716561537?e=1708689600&v=beta&t=kyQWUHN0SujR2ZW7v5gWGX9xtTOis5rcuYSu8sEkEPQ", 
    "mail": "joel@mail.com", 
    "password": "12345678", 
    "role": "user"
    },

{
    "nombre": "Guillermo",
    "apellidos": "Torrres",
    "misAnimales": [],
    "image": "https://cdn.discordapp.com/attachments/1186681389999988816/1208725459018448939/image.png?ex=65e4544e&is=65d1df4e&hm=fc4bfd0802b76c3bd8b95087bd203bf93ec4ec6bfbb94d69dfabeed7ac747353&", 
    "mail": "guille@mail.com", 
    "password": "12345678", 
    "role": "user"   
},

{
    "nombre": "Enrique",
    "apellidos": "Gomez",
    "misAnimales": [],
    "image": "https://media.licdn.com/dms/image/D4E35AQFFDR7mX8tbBQ/profile-framedphoto-shrink_400_400/0/1691590620631?e=1708819200&v=beta&t=o9mcy9CQwLs94Zia3upJAVibWgqd4x9QQBZXmkrUOwQ", 
    "mail": "enrique@mail.com", 
    "password": "12345678", 
    "role": "user"   
},

{
    "nombre": "Mario",
    "apellidos": "Martin",
    "misAnimales": [],
    "image": "https://media.licdn.com/dms/image/C4D03AQEUEe22JC5RMQ/profile-displayphoto-shrink_100_100/0/1588694075873?e=1713398400&v=beta&t=-hp96b1rsVUAuU9k-xKv90s-sIzHN4Z9HV0_cteY5xU", 
    "mail": "mario@mail.com", 
    "password": "12345678", 
    "role": "user"   
},

{
    "nombre": "Fernando",
    "apellidos": "Giannattasio",
    "misAnimales": ["65ccce9425aa66143af122da"],
    "image": "https://media.licdn.com/dms/image/D5635AQHc-BqCMsU7yg/profile-framedphoto-shrink_100_100/0/1646582553537?e=1708819200&v=beta&t=GBPAEfrt4VwrH3l06QbQuW0La7pHxeKTw-gY-OS80W0", 
    "mail": "fer@mail.com", 
    "password": "12345678", 
    "role": "user"   
}


]


mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    const allUsers = await Users.find();
    if(allUsers > 0){
        await User.collection.drop();
        console.log(" Usuarios borrados");
    }
  })

.catch((error) => console.log("error al borrar usuarios", error))
.then(async () => {
const usersMap = arrayUsers.map((user)=> new Animal(user));
await User.insertMany(usersMap);
console.log("Usuarios insertados correctamente");

})
.catch((error) => console.log("error al insertar Usuarios", error))
.finally(()=> mongoose.disconnect());