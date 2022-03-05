const express = require('express');

const my_app = express()
require('dotenv').config();
const mongoose = require ('mongoose')
const port = process.env.PORT || 3000

/*Configurar puerto de conexion del proyecto
la funcion listen recibe dos parametros
el pueto de conexion  y una funcion flecha */

my_app.listen(port, () => {

  console.log('Conexion ok', port)

})

/* Para acceder a este end pont accedemos por
  http://localhost:3000/dashboard  */

mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
.then(()=>console.log('Conexion DB ok'))
.catch((error)=>console.log(error))
