import * as express from "express"
import positionRouter from './position.routes.js'
import departamentRouter from './departament.routes.js'
import goalRouter from './goal.routes.js'
import metricRouter from './metric.routes.js'
import employeeRouter from './employee.routes.js'
import assessmentRouter from './assessment.routes.js'
import authRouter from './auth.routes.js'

const router = express.Router()

router.use('/positions', positionRouter)
router.use('/departaments', departamentRouter)
router.use('/goals', goalRouter)
router.use('/metrics', metricRouter)
router.use('/employees', employeeRouter)
router.use('/assessments', assessmentRouter)
router.use('/users', authRouter)

router.get('/', (req, res) => {
    res.send({
        status: true,
        message: 'API PROJECTO FINAL UC - PROGRAMAÇÃO WEB AVANÇADA'
    })
})
  
export default router