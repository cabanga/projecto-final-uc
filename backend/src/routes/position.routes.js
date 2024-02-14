import { Router } from 'express'
import { 
    index,
    show,
    create,
    update
} from '../app/controllers/positionsController.js'


const router = Router()

router.route('/').get(index)
router.route('/:id').get(show)
router.route('/').post(create)
router.route('/:id').patch(update)


export default router

