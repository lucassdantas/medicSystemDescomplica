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
    required: [true, 'phone is required'],
    validate:{
      validator:(v) => {
        return /\d{2} 9\d{4}-\d{9}/.test(v)
      },
      message: props => `${props.value}`
    }
  },
  createdAt:{
    type:Date,
    default: Date.now
  }
})

const pacient = mongoose.model('Pacient', pacientSchema)

export default pacient