import { Router } from "express";

const router = Router();

router.get('/events',(req,res) => res.send('Obteniendo eventos'))
router.get('/events/:id',(req,res) => res.send('Obteniendo evento único'))
router.post('/events',(req,res) => res.send('Creando evento'))
router.put('/events/:id',(req,res) => res.send('Actualizando evento único'))
router.delete('/events/:id',(req,res) => res.send('Eliminando Evento'))
//esto me va a permitir definir rutas que voy a poder llamar desde el front
export default router;