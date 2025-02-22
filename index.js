import express from 'express'
import pkg from 'body-parser'
import router from './src/routes/router.js'
import db from './src/database/database.js'

const app = express();
const {json, urlencoded} = pkg 

app.use(json())
app.use(urlencoded({extended:true}))

app.listen(3000, () => {
  console.log('running')
})

app.use('/', router)