import {mongoose} from 'mongoose'

const Schema = mongoose.Schema

const appointmentsSchema = new Schema({
  date:{
    type: Date,
    required: [true, 'appointment Date is required']
  },
  doctorId: {
    type: String, 
    required: [true, 'doctorId is required']
  },
  pacientId: {
    type: String, 
    required: [true, 'pacientId is required']
  },
  createdAt: {
    type: Date, 
    default: Date.now
  }
})

const appointment = mongoose.model('Appointment', appointmentsSchema)

export default appointment