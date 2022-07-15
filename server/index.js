import express from 'express'
import dotenv from 'dotenv'
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import roomsRoute from './routes/rooms.js'
import hotelsRoute from './routes/hotels.js'
import connectDb from './db/connect.js'
import cookieParser from 'cookie-parser'

dotenv.config()
const app = express()

const connection = async() => {
    try {
        await connectDb(process.env.MONGO_URL)
        console.log('Connected to Database');
    } catch (error) {
        console.log(error);
    }
}

//middlewares
app.use(express.json())
app.use(cookieParser())

//route middlewares

app.use('/api/auth', authRoute)
app.use('/api/users', usersRoute)
app.use('/api/rooms', roomsRoute)
app.use('/api/hotels', hotelsRoute)



const port = process.env.PORT || 2000

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
    connection()
})