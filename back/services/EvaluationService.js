import evaluationRepository from '../repositories/EvaluationRepository'

const saveEvaluation = (evaluationModel) => {
    return evaluationRepository.saveEvaluation(evaluationModel)
}

const getEvaluationById = (id) => {
    return evaluationRepository.getEvaluationById(id)
}

const getAllEvaluations = () => {
    return evaluationRepository.getByIdEvaluation()
}

const deleteEvaluations = (id) => {
    return evaluationRepository.deleteEvaluations(id)
}

const updateEvaluationById = (id, evaluationModel) => {
    return evaluationRepository.updateEvaluationById(id, evaluationModel)
}

const service = {
    saveEvaluation,
    getEvaluationById,
    getAllEvaluations,
    deleteEvaluations,
    updateEvaluationById
}

export default service