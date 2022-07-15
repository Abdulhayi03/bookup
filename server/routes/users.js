import express from 'express'
import { updateUser, getUser, getUsers, deleteUser} from '../controllers/users.js'
import { verifyUser, verifyAdmin } from '../utils/verifyToken.js'
const router = express.Router()


//GET Users
router.get('/',verifyAdmin, getUsers)

//GET SINGLE User
router.get('/:id', verifyUser, getUser)

//UPDATE User
router.put('/:id',verifyUser, updateUser)

//DELETE User
router.delete('/:id',verifyUser, deleteUser)




export default router

