const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const cookieParser = require('cookie-parser')

const refreshTokens = require('./models/tokens')
const users = require('./models/users')

const app = express()

dotenv.config()
mongoose.connect(process.env.DATABASE1_KEY)
 
app.use(express.json())
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}))
app.use(cookieParser())

app.listen(process.env.SERVER_PORT, ()=>{
    console.log('Server is listening on', process.env.SERVER_PORT)
})

const authenticateUser = require('./functions/authenticateUser')
const authenticateToken = require('./functions/authenticateToken')
const authorizeNewUser = require('./functions/authorizeNewUser')
const generateAccessToken = require('./functions/generateAccessToken')

// ERROR CODES ->
// 401 - Unauthorised (Token expired) 
// 403 - Forbidden

async function checkDuplicateUser(req, res, next) {
    const duplicateUser = await users.findOne({username: req.body.username})
    if(duplicateUser) res.sendStatus(409) //Conflict -> duplicate user
    else next()
}

async function hashThis(value) {
    const salt = await bcryptjs.genSalt()
    const hashed = await bcryptjs.hash(value, salt)
    return hashed ? hashed : false
}

app.get('/api/usernameCheck', async function(req, res) {
    if(!req.query.username) res.sendStatus(401)
    else {
        const duplicateUser = await users.findOne({username: req.query.username})
        if(duplicateUser) res.json({exists:true})
        else res.json({exists:false})
    }
})

app.post('/api/validateToken', async function(req, res) {
    if(!req.cookies.RT) res.sendStatus(401)
    else {
        const validity = await refreshTokens.findOne({token: req.cookies.RT})
        if(!validity) res.json({validity: false})
        else res.json({validity: true})
    }
})

app.post('/register', checkDuplicateUser, async function(req, res) {
    

    const hashedPW = await hashThis(req.body.password)
    if(!hashedPW) res.sendStatus(500)
    const newUser = await users.create({
        name: req.body.name,
        username: req.body.username,
        password: hashedPW,
        email: req.body.email,
        phone: req.body.phone
    })
    if(newUser) {
        // send payload back to client
        const userPayLoad = {
            userid: newUser.id
        }
    
        await authorizeNewUser(res, userPayLoad)  
    }
    else {
        console.log("Error creating new user.")
        res.sendStatus(500)
    }
})

app.post('/login',authenticateUser, async function (req, res) {

    const userPayLoad = {
        userid: req.userid
    }

    await authorizeNewUser(res, userPayLoad)
})

app.post('/logout', authenticateToken, async function (req, res) {
    const deleteToken = await refreshTokens.findOneAndDelete({token:req.cookies.RT})
    if(deleteToken){
        res.clearCookie('AT')
        res.clearCookie('RT')
        res.sendStatus(200)
    }
    else res.sendStatus(403) //token not valid
} )

app.post('/token', async function (req, res) {
    const refreshToken= req.cookies.RT
    if (refreshToken == null) res.sendStatus(401)
    const tokenCheck = await refreshTokens.findOne({token:refreshToken})
    if(tokenCheck) {
        console.log('Refresh token verified')
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user)=>{
            if (err) res.sendStatus(403) // token invalid
            else {
                const accessToken = generateAccessToken({userid: user.userid})
                res.cookie('AT', accessToken, {
                    httpOnly: true,
                    sameSite: 'strict',
                    path: '/'
                })
                res.json({status: 'complete'})
            }
        })
    }
    else {
        res.sendStatus(403) //token not found in database
    }
})

app.get('/', (req, res)=>{
    res.send('Welcome to my server, enjoy')
})