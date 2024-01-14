import userRepository from '../repositories/UserRepository'

const saveUser = (userModel) => {
    return userRepository.saveUser(userModel)
}

const getUserById = (id) => {
    return userRepository.getUserById(id)
}

const getAllUsers = () => {
    return userRepository.getByIdUser()
}

const deleteUsers = (id) => {
    return userRepository.deleteUsers(id)
}

const updateUserById = (id, userModel) => {
    return userRepository.updateUserById(id, userModel)
}

const service =  {
    saveUser,
    getUserById,
    getAllUsers,
    deleteUsers,
    updateUserById
}

export default service