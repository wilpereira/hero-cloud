import teacherRepository from '../repositories/TeacherRepository'

const saveTeacher = (teacherModel) => {
    return teacherRepository.saveTeacher(teacherModel)
}

const getTeacherById = (id) => {
    return teacherRepository.getTeacherById(id)
}

const getAllTeachers = () => {
    return teacherRepository.getByIdTeacher()
}

const deleteTeachers = (id) => {
    return teacherRepository.deleteTeachers(id)
}

const updateTeacherById = (id, teacherModel) => {
    return teacherRepository.updateTeacherById(id, teacherModel)
}

const service =  {
    saveTeacher,
    getTeacherById,
    getAllTeachers,
    deleteTeachers,
    updateTeacherById
}

export default service