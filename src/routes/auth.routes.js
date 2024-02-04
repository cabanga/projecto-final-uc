import { Router } from 'express'
import { 
    register,
    login
} from '../app/controllers/authController.js'


const router = Router()

router.route('/').post(register)
router.route('/login').post(login)



export default router

