import {mongoose} from 'mongoose'

const Schema = mongoose.Schema;

const pacientSchema = new Schema({
  name:{
    type:String,
    required:[true, 'name is required']
  },
  birthDate:{
    type:Date,
    required:[true, 'birthDate is required']
  },
  email: {
    type:String,
    required: [true, 'email is required']
  },
  phone: {
    type:String,
    required: [true, 'phone is required']
  },
  createdAt:{
    type:Date,
    default: Date.now
  }
})

const pacient = mongoose.model('Pacient', pacientSchema)

export default pacient