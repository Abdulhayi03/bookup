import User from '../models/Users.js'


//READ
const getUser = async(req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getUsers = async(req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
}

//UPDATE
const updateUser = async(req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true})
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json(error)
    }
}

//DELETE
const deleteUser = async(req, res) => {
    try {
        const delUser = await User.findByIdAndDelete(req.params.id)
        res.status(200).json('User Deleted')
    } catch (error) {
        res.status(500).json(error)
    }
}


export { updateUser, getUser, getUsers, deleteUser}


