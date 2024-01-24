import { express } from 'express'
let router = express.router()

import teacherService from '../services/TeacherService'

router.post('/add-teacher', async (req,res) => {
    const teacherModel = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        gender: req.body.gender
    }

    const teacher = await teacherService.saveTeacher(teacherModel)
    return res.status(200).json(teacher)
})

router.get('all-teachers', async (req, res) => {
    const allTeachers = await teacherService.getAllTeachers()
    return res.status(200).json(allTeachers)
})

router.get('/teacher/:id', async (req, res) => {
    const teacher = await teacherService.getTeacherById(req.params.id)
    return res.status(200).json(teacher)
})

router.delete('/delete-teacher/:id', async (req, res) => {
    const teacher = await teacherService.deleteTeachers(req.params.id)
    return res.status(200).json(teacher)
})

router.put('/update-teacher', async (req,res) => {
    const teacherModel = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        gender: req.body.gender
    }

    const teacher = await teacherService.updateTeacherById(req.params.id, teacherModel)
    return res.status(200).json(teacher)
})

export default router