import courseRepository from '../repositories/CourseRepository'

const saveCourse = (courseModel) => {
    return courseRepository.saveCourse(courseModel)
}

const getCourseById = (id) => {
    return courseRepository.getCourseById(id)
}

const getAllCourses = () => {
    return courseRepository.getByIdCourse()
}

const deleteCourses = (id) => {
    return courseRepository.deleteCourses(id)
}

const updateCourseById = (id, courseModel) => {
    return courseRepository.updateCourseById(id, courseModel)
}

const service =  {
    saveCourse,
    getCourseById,
    getAllCourses,
    deleteCourses,
    updateCourseById
}

export default service