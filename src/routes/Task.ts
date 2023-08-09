import { Router } from 'express'
import { getTasks } from '../controllers/Task'

const router = Router()

router.get('/tasks', getTasks)
router.get('/tasks/count')
router.get('/tasks:id')
router.post('/tasks')
router.put('/tasks')
router.delete('/tasks:id')

export default router
