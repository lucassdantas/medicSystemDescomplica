import {express} from 'express'
import {pkg} from 'body-parser'
import {router} from './routes/router.js'

const app = express();
const [json, urlencoded] = pkg 

app.use(json())
app.use(urlencoded({extended:true}))

app.listen(3000, () => {
  console.log('running')
})

app.use('/', router)