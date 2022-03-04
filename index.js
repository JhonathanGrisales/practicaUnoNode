const express = require('express')
const my_app = express()
require('dotenv').config();
const port = process.env.PORT || 3000

/*Configurar puerto de conexion del proyecto
la funcion listen recibe dos parametros
el pueto de conexion  y una funcion flecha */

my_app.listen(port, () => {

  console.log('Conexion ok', port)

})

/* Para acceder a este end pont accedemos por
  http://localhost:3000/dashboard  */

my_app.get("/dashboard", (req, res) => {

  res.send('Ejecutando Node por el puerto ' + port)

})

/* Listar productos quemados */


my_app.get("/products", (req, res) => {

  res.json([{

    product: "Product 1",
    brand: "Adidas",
    reference: {

      price: 35000,
      size: 39,
      cant: 3,
      color: {
        option_color1: "Green",
        option_color2: "Blue",
        option_color3: "red",
        option_color4: "Black",

      }

    }


  }])

})

