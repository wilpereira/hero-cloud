import { express } from 'express'
let router = express.router()

import evaluationService from '../services/EvaluationService'

router.post('/add-evaluation', async (req,res) => {
    const evaluationModel = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        gender: req.body.gender
    }

    const evaluation = await evaluationService.saveEvaluation(evaluationModel)
    return res.status(200).json(evaluation)
})

router.get('all-evaluations', async (req, res) => {
    const allEvaluations = await evaluationService.getAllEvaluations()
    return res.status(200).json(allEvaluations)
})

router.get('/evaluation/:id', async (req, res) => {
    const evaluation = await evaluationService.getEvaluationById(req.params.id)
    return res.status(200).json(evaluation)
})

router.delete('/delete-evaluation/:id', async (req, res) => {
    const evaluation = await evaluationService.deleteEvaluations(req.params.id)
    return res.status(200).json(evaluation)
})

router.put('/update-evaluation', async (req,res) => {
    const evaluationModel = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        gender: req.body.gender
    }

    const evaluation = await evaluationService.updateEvaluationById(req.params.id, evaluationModel)
    return res.status(200).json(evaluation)
})

export default router