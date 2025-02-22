import prescriptionRepository from '../repositories/PrescriptionRepository.js'

const getAllPrescriptions = async () => {
  return await prescriptionRepository.getAllPrescriptions()
}

const getPrescription = async (id) => {
  return await prescriptionRepository.getPrescription(id)
}

const savePrescription = async ({date, appointmentId, medicine, dosage, instructions}) => {
  return await prescriptionRepository.savePrescription({date, appointmentId, medicine, dosage, instructions})
}

const updatePrescription = async (id, {date, appointmentId, medicine, dosage, instructions}) => {
  return await prescriptionRepository.updatePrescription(id, {date, appointmentId, medicine, dosage, instructions})
}

const deletePrescription = async (id) => {
  return await prescriptionRepository.deletePrescription(id)
}

const prescriptionsService = {
  getAllPrescriptions,
  getPrescription,
  savePrescription,
  updatePrescription,
  deletePrescription
}

export default prescriptionsService