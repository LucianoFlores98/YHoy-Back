import { Router } from "express";

const router = Router();

router.post('/signin',(req,res) => res.send('Ingresando'))

router.post('/signup',(req,res) => res.send('Registrando'))

//cuando queramos cerrar sesion debemos "cancelar" el token dado al usuario
router.post('/logout',(req,res) => res.send('Cerrando Sesion'))

router.get('/profile',(req,res) => res.send('Datos del usuario'))


//esto me va a permitir definir rutas que voy a poder llamar desde el front
export default router;