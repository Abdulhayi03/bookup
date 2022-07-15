import mongoose from 'mongoose'

const RoomSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true,
    },
    price:{
        type: Number,
        require: true,
    },
    maxPeople:{
        type: Number,
        require: true,
    },
    desc:{
        type: String,
        require: true,
    },
    roomNumbers: 
    [
        {
            number:Number, unavailableDates:{type: [Date]}
        }
    ],
}, {timestamps:true})

//example
// [
//     {number:101, unavailableDates:[01.02.2022, 02, 05, 2022]},
//     {number:102, unavailableDates:[03.04.2022, 02, 07, 2022]},
//     {number:103, unavailableDates:[03.01.2022, 03, 03, 2022]}
// ]

export default mongoose.model('Room', RoomSchema)