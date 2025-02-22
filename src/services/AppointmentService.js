import appointmentRepository from "../repositories/AppointmentRepository.js";

const getAllAppointments = () => {
  return appointmentRepository.getAllAppointments()
}

const getAppointment = (id) => {
  return appointmentRepository.getAppointment(id)
}

const saveAppointment = ({date, doctorId, pacientId}) => {
  return appointmentRepository.saveAppointment({date, doctorId, pacientId})
}

const updateAppointment = (id, {date,doctorId, pacientId}) => {
  return appointmentRepository.updateAppointment(id, {date, doctorId, pacientId})
}

const deleteAppointment = (id) => {
  return appointmentRepository.deleteAppointment(id)
}

const appointmentService = {
  getAllAppointments,
  getAppointment,
  saveAppointment,
  updateAppointment,
  deleteAppointment
}

export default appointmentService