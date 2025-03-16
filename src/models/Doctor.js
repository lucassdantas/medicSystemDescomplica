import {mongoose} from 'mongoose'

const Schema = mongoose.Schema

const doctorsSchema = new Schema({
  name:{
    type: String, 
    required: [true, 'name is required']
  },
  
  login: {
    type: String,
    required: [true, 'login is required'],
    unique:true
  },

  password:{
    type: String, 
    required:[true, 'password is required']
  },
  medicalSpeciality:{
    type:String,
    required:[true, 'password is required']

  },
  medicalRegistration:{
    type:String,
    required:[true, 'crm is required'],
    unique:true
  },
  email:{
    type:String,
    required:[true, 'email is required']
  },

  phone:{
    type:String,
    required:[true, 'phone is required'],
    validate:{
      validator:function(v) {
        return /\d{2} 9\d{4}-\d{4}/.test(v)
      },
      message: props => `${props.value}`
    }
    
  },
  createdAt: {
    type: Date, 
    default: Date.now
  }
})

const doctor = mongoose.model('doctor', doctorsSchema)

export default doctor