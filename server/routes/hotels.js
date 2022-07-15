import express from 'express'
import {postHotel, updateHotel, getHotel, getHotels, deleteHotel} from '../controllers/hotels.js'
import { verifyAdmin } from '../utils/verifyToken.js'


const router = express.Router()


//GET HOTELS
router.get('/', getHotels)

//POST HOTEL
router.post('/',verifyAdmin, postHotel)

//GET SINGLE HOTEL
router.get('/:id', getHotel)

//UPDATE HOTEL
router.put('/:id',verifyAdmin, updateHotel)

//DELETE HOTEL
router.delete('/:id',verifyAdmin, deleteHotel)




export default router

