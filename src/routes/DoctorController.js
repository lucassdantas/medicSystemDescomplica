import express from 'express'
import DoctorService from '../services/DoctorService.js'
import bcrypt from 'bcrypt'
let router = express.Router()


router.get('/doctors', async(req, res) => {
  try {
    const doctors = await DoctorService.getAllDoctors();
    res.send(doctors)
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
})

router.get('/getDoctor/:id', async(req, res) => {
  const {id} = req.params
  try {
    const doctor = await DoctorService.getDoctor(id);
    res.send(doctor)
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
})
router.post('/postDoctor', async(req, res) => {
  const { name, login, password, medicalSpeciality, medicalRegistration, email, phone} = req.body
  const hashedPassword = await bcrypt.hash(password, 10)
  try {
    const doctor = await DoctorService.saveDoctor({ name, login, hashedPassword, medicalSpeciality, medicalRegistration, email, phone});
    res.send(doctor)
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
})
router.put('/doctors/:id', async(req, res) => {
  const {id} = req.params
  const { name, login, password, medicalSpeciality, medicalRegistration, email, phone} = req.body
  const hashedPassword = await bcrypt.hash(password, 10)
  try {
    const doctor = await DoctorService.updateDoctor(id, { name, login, hashedPassword, medicalSpeciality, medicalRegistration, email, phone});
    res.send(doctor)
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
})

router.delete('/doctors/:id', async(req, res) => {
  const {id} = req.params
  try {
    const doctor = await DoctorService.deleteDoctor(id)
    res.send(doctor)
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
})

export default router