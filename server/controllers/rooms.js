import Room from '../models/Room.js'
import Hotel from '../models/Hotel.js'

//CREATE
const postRoom = async(req, res)=>{
    const hotelId = req.params.hotelId
    const newRoom = new Room(req.body)

    try {
        const savedRoom = await newRoom.save()
        try {
            await Hotel.findByIdAndUpdate(hotelId, {$push: {rooms: savedRoom._id}})
        } catch (error) {
            res.status(500).json(error)
        }
        res.status(200).json(savedRoom)
    } catch (error) {
        res.status(500).json(error)
    }
}

//READ
const getRoom = async(req, res) => {
    try {
        const room = await Room.findById(req.params.id)
        res.status(200).json(room)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getRooms = async(req, res) => {
    try {
        const rooms = await Room.find()
        res.status(200).json(rooms)
    } catch (error) {
        res.status(500).json(error)
    }
}

//UPDATE
const updateRoom = async(req, res) => {
    try {
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true})
        res.status(200).json(updatedRoom)
    } catch (error) {
        res.status(500).json(error)
    }
}

//DELETE
const deleteRoom = async(req, res) => {
    const hotelId = req.params.hotelId
    try {
        const delRoom = await Room.findByIdAndDelete(req.params.id)
        try {
            await Hotel.findByIdAndUpdate(hotelId, {$pull: {rooms: req.params.id}})
        } catch (error) {
            res.status(500).json(error)
        }
        res.status(200).json('Room Deleted')
    } catch (error) {
        res.status(500).json(error)
    }
}


export {postRoom, updateRoom, getRoom, getRooms, deleteRoom}


