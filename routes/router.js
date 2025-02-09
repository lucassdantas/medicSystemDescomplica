import {express} from 'express'

let router = express.Router()

router.get(
  '/', (req, res) => {
    console.log('running')
    res.status(200).json({message:'oi'})
  }
)

export default router;