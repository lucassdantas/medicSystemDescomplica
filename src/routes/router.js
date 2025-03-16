import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import appointmentController from './AppointmentController.js' 
import doctorController from './DoctorController.js' 
import pacientController from './PacientController.js' 
import prescriptionController from './PrescriptionController.js' 
import doctorRepository from '../repositories/DoctorRepository.js'
import verifyToken from '../middleware/authMiddleware.js'

const router = express.Router()

router.get(
  '/', (req, res) => {
    console.log('running')
    res.status(200).json({message:'oi'})
  }
)

router.post('/login', async(req, res) => {
  try {
    const {login, password} = req.body
    const doctor = await doctorRepository.getDoctorByLogin(login)
    if(!doctor) return res.status(401).json({error:'authentication failed'})
    const passwordMatch = await bcrypt.compare(password, doctor.password)
    if(!passwordMatch) return res.status(401).json({error:'senha inválida'})
    const token = jwt.sign({doctorId:doctor._id}, 'you-secret-key', {expiresIn:'1h'}) //in real example, the secret key will be hidden on this repository
    res.status(200).json({token})
  } catch (error) {
    console.log(error)
    res.status(500).json({error:'login failed'}) 
  }
})

router.use('/', verifyToken, appointmentController)
router.use('/', verifyToken, doctorController)
router.use('/', verifyToken, pacientController)
router.use('/', verifyToken, prescriptionController)

export default router;