import Hotel from '../models/Hotel.js'

//CREATE
const postHotel = async(req, res) => {
    const newHotel = new Hotel(req.body)
    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (error) {
        res.status(500).json(error)
    }
}

//READ
const getHotel = async(req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getHotels = async(req, res) => {
    try {
        const hotels = await Hotel.find()
        res.status(200).json(hotels)
    } catch (error) {
        res.status(500).json(error)
    }
}

//UPDATE
const updateHotel = async(req, res) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true})
        res.status(200).json(updatedHotel)
    } catch (error) {
        res.status(500).json(error)
    }
}

//DELETE
const deleteHotel = async(req, res) => {
    try {
        const delHotel = await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json('Hotel Deleted')
    } catch (error) {
        res.status(500).json(error)
    }
}


export {postHotel, updateHotel, getHotel, getHotels, deleteHotel}


