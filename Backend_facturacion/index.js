//console.log('texto prueba nodemon');

//creacion del sevidor

const express = require ('express');
const conectarDb = require ('./config/db')

const app = express()
conectarDb()
app.use(express.json());

app.use('/api/facturacion',require('./routes/rutas_aplicacion'))

app.listen(5200, () =>{
    console.log('el servidor esta arriba');
})
