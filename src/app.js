import express from "express";
import morgan from "morgan";

import eventsRoutes from "./routes/events.routes.js";
import authRoutes from "./routes/auth.routes.js"

const app = express()

//Middlewares
app.use(morgan('dev'))
app.use(express.json()) //vamos a estar enviando y recibiendo json
app.use(express.urlencoded({extended: false})) //para formularios HTML. EL extended es para definir que no van a ser formularios grandes

//Routes
//Obtener la ruta principal, recibir la informacion y enviar un mensaje json al front
app.get('/',(req,res) =>{ res.json({message: "Bienvenidos a mi API" })})
app.use('/api',eventsRoutes)
app.use('/api',authRoutes)

//Usamos un middleware para manejar los errores. Es una ruta final pero solamente para los errores
app.use((err,req,res,next) => {
    res.status(500).json({
        status: 'Error',
        message: err.message
    })
})

export default app;