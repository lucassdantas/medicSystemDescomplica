import prescriptionRepository from '../repositories/PrescriptionRepository.js'
import appointmentService from './AppointmentService.js'
import doctorService from './DoctorService.js'
import pacinetsService from './PacientService.js'
import PDFDocument from 'pdfkit'
import fs from 'fs'
const getAllPrescriptions = async () => {
  return await prescriptionRepository.getAllPrescriptions()
}

const getPrescription = async (id) => {
  return await prescriptionRepository.getPrescription(id)
}

const savePrescription = async ({date, appointmentId, medicine, dosage, instructions}) => {
  return await prescriptionRepository.savePrescription({date, appointmentId, medicine, dosage, instructions})
}

const updatePrescription = async (id, {date, appointmentId, medicine, dosage, instructions, file}) => {
  return await prescriptionRepository.updatePrescription(id, {date, appointmentId, medicine, dosage, instructions, file})
}

const deletePrescription = async (id) => {
  return await prescriptionRepository.deletePrescription(id)
}

const generatePrescriptionFile = async (prescription) => {
  const appointment = await appointmentService.getAppointment(prescription.appointmentId)
  const pacient = await pacinetsService.getAllPacients(appointment.pacientId)
  const doctor = await doctorService.getDoctor(appointment.doctorId)

  const id = prescription._id
  const document = new PDFDocument({font:'Courirer'})
  const filePath = "../prescriptions/"+id+".pdf"

  document.pipe(fs.createWriteStream(filePath))
  document.fontSize(16).text('Pacient name: ' + pacient.name)
  document.fontSize(16).text('Doctor name: ' + doctor.name)

  const recipe = 'Medicine: ' + prescription.medicine
  document.fontSize(12).text(recipe)

  document.fontSize(12).text('Dose: ' + prescription.dosage)
  document.fontSize(12).text('Instruction: ' + prescription.instructions)

  document.end()
  return prescription

}
const prescriptionsService = {
  getAllPrescriptions,
  getPrescription,
  savePrescription,
  updatePrescription,
  deletePrescription,
  generatePrescriptionFile
}

export default prescriptionsService