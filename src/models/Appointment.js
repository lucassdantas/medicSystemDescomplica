import {mongoose} from 'mongoose'

const Schema = mongoose.Schema

const appointmentsSchema = new Schema({
  date:{
    type: Date,
    required: [true, 'appointment Date is required']
  },
  doctorId: {
    type: String, 
    required: [true, 'doctorId is required'],
    validate:{
      validator:(v) => {
        const id = new mongoose.Types.ObjectId(v)
        return Doctor.exists({_id:id})
      },
      message:props => `Doctor id ${props.value} not found.`
    }
  },
  pacientId: {
    type: String, 
    required: [true, 'pacientId is required'],
    validate:{
      validator:(v) => {
        const id = new mongoose.Types.ObjectId(v)
        return Pacient.exists({_id:id})
      },
      message:props => `Pacient id ${props.value} not found.`
    }
  },
  createdAt: {
    type: Date, 
    default: Date.now
  }
})

const appointment = mongoose.model('Appointment', appointmentsSchema)

export default appointment