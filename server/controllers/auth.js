import User from '../models/Users.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

//Register new user
const register = async (req, res) => {
    try {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash
        })

        await newUser.save()
        console.log(newUser)
        res.status(200).json('User created')
    } catch (err) {
        res.status(500).json(err)
    }
}

//Login user
const login = async (req, res) => {
    try {
        const user = await User.findOne({username: req.body.username})
        if(!user) return res.status(404).json('User not found!')

        const correctPassword = await bcrypt.compare(req.body.password, user.password)
        if(!correctPassword) return res.status(400).json('Wrong credentials')

        const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT)

        const {password, isAdmin, ...otherDetails} = user._doc
        res.cookie("access_token", token, {httpOnly: true}).status(200).json({...otherDetails})
    } catch (err) {
        res.status(500).json(err)
    }
}
 
export {register, login}