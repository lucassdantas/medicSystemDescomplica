import express from 'express'
import PrescriptionService from '../services/PrescriptionService.js'
import prescriptionsService from '../services/PrescriptionService.js';
import multer from 'multer'
import path from 'path'
import process from 'process'

let router = express.Router()

const storage = multer.diskStorage({
  destination:(req, file, cb) => {
    cb(null, '../prescriptions')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

const upload = multer({storage:storage})

router.post('/uploadPrescription/:id', upload.single('file'), async(req, res) => {
  try {
    const {id} = req.params
    let prescription = await prescriptionsService.getPrescription(id)

    const file = '../prescriptions/' + req.file.originalname
    prescription = await prescriptionsService.updatePrescription(id, {file})

    return res.status(200).send(prescription)
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
})

router.get('readPrescription/:id', async(req,res) => {
  const {id} = req.params
  try {
    const prescription = await PrescriptionService.getPrescription(id)
    let filePath = path.resolve(process.cwd() + '/../'+prescription.file)
    res.status(200).sendFile(filePath)

  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
})
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

router.get('/generatePrescription/:id', async(req, res) => {
  const {id} = req.params
  try {
    const prescription = await prescriptionsService.getPrescription(id)
    const generatePrescription = await prescriptionsService.generatePrescriptionFile(prescription)
    res.send(generatePrescription)
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
})
export default router