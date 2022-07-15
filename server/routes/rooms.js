import express from 'express'
import {postRoom, updateRoom, getRoom, getRooms, deleteRoom} from '../controllers/rooms.js'
import { verifyAdmin } from '../utils/verifyToken.js'


const router = express.Router()


//GET RoomS
router.get('/', getRooms)

//POST Room
router.post('/:hotelId', verifyAdmin, postRoom)

//GET SINGLE Room
router.get('/:id', getRoom)

//UPDATE Room
router.put('/:id',verifyAdmin, updateRoom)

//DELETE Room
router.delete('/:id/:hotelId',verifyAdmin, deleteRoom)




export default router

