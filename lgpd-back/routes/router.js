import express from 'express'
let router = express.Router()

import evaluationController from './EvaluationController'
import courseController from './CourseController'
import teacherController from './TeacherController'
import userController from './UserController'

router.get('/', (req, res) => {
    console.log('** 1')

    res.status(200).json({ message: 'Oi!' })
})

router.use('/', courseController)
router.use('/', evaluationController)
router.use('/', teacherController)
router.use('/', userController)

export default router