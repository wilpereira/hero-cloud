import { express } from 'express'
let router = express.router()

import userService from '../services/UserService'

router.post('/add-user', async (req,res) => {
    const userModel = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        gender: req.body.gender
    }

    const user = await userService.saveUser(userModel)
    return res.status(200).json(user)
})

router.get('all-users', async (req, res) => {
    const allUsers = await userService.getAllUsers()
    return res.status(200).json(allUsers)
})

router.get('/user/:id', async (req, res) => {
    const user = await userService.getUserById(req.params.id)
    return res.status(200).json(user)
})

router.delete('/delete-user/:id', async (req, res) => {
    const user = await userService.deleteUsers(req.params.id)
    return res.status(200).json(user)
})

router.put('/update-user', async (req,res) => {
    const userModel = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        gender: req.body.gender
    }

    const user = await userService.updateUserById(req.params.id, userModel)
    return res.status(200).json(user)
})

export default router