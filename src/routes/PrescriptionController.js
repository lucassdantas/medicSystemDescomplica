import express from 'express'
import PrescriptionService from '../services/PrescriptionService.js'
let router = express.Router()


router.get('/prescriptions', async(req, res) => {
  try {
    const prescriptions = await PrescriptionService.getAllPrescriptions();
    res.send(prescriptions)
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
})

router.get('/getPrescription/:id', async(req, res) => {
  const {id} = req.params
  try {
    const appointment = await PrescriptionService.getPrescription(id);
    res.send(appointment)
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
})
router.post('/postPrescription', async(req, res) => {
  const {date, doctorId, pacientId} = req.body
  try {
    const appointment = await PrescriptionService.savePrescription({date, doctorId, pacientId});
    res.send(appointment)
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
})
router.put('/prescriptions/:id', async(req, res) => {
  const {id} = req.params
  const {date, doctorId, pacientId} = req.body
  try {
    const appointment = await PrescriptionService.updatePrescription(id, {date, doctorId, pacientId});
    res.send(appointment)
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
})

router.delete('/prescriptions/:id', async(req, res) => {
  const {id} = req.params
  try {
    const appointment = await PrescriptionService.deletePrescription(id)
    res.send(appointment)
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
})

export default router