import {mongoose} from 'mongoose'

const Schema = mongoose.Schema

const prescriptionsSchema = new Schema({
  date: {
    type: Date,
    required:[true, 'Date of prescription is required']
  },
  appointmentId:{
    type: String,
    required:[true, 'AppointmentId is required']
  },
  medicine:{
    type:String,
    required:[true, 'medicine is required']
  },
  dosage:{
    type:String,
    required:[true, 'dosage is required']
  },
  instructions:{
    type: String
  },
  createdAt: {
    type: Date, 
    default: Date.now
  }
})

const prescription = mongoose.model('prescription', prescriptionsSchema)

export default prescription