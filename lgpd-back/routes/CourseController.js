import { express } from 'express'
let router = express.router()

import courseService from '../services/CourseService'

router.post('/add-course', async (req,res) => {
    const courseModel = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        gender: req.body.gender
    }

    const course = await courseService.saveCourse(courseModel)
    return res.status(200).json(course)
})

router.get('all-courses', async (req, res) => {
    const allCourses = await courseService.getAllCourses()
    return res.status(200).json(allCourses)
})

router.get('/course/:id', async (req, res) => {
    const course = await courseService.getCourseById(req.params.id)
    return res.status(200).json(course)
})

router.delete('/delete-course/:id', async (req, res) => {
    const course = await courseService.deleteCourses(req.params.id)
    return res.status(200).json(course)
})

router.put('/update-course', async (req,res) => {
    const courseModel = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        gender: req.body.gender
    }

    const course = await courseService.updateCourseById(req.params.id, courseModel)
    return res.status(200).json(course)
})

export default router