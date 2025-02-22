import mongoose from 'mongoose'

mongoose.connect('mongodb:localhost:27017/')

const db = mongoose.connection 

db.on('error', console.error.bind(console, 'connection error: '))

db.once(
  'open', () => {
    console.log('db connected succesfully')
  }
)

export default db;