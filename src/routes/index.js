import * as express from "express"
import positionRouter from './position.routes.js'
import departamentRouter from './departament.routes.js'

const router = express.Router()
router.use('/positions', positionRouter)
router.use('/departaments', departamentRouter)

router.get('/', (req, res) => {
    res.send({
        status: true,
        message: 'API PROJECTO FINAL UC - PROGRAMAÇÃO WEB AVANÇADA'
    })
})
  
export default router