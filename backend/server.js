require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

// Express App
const app = express()

// Middleware
app.use(express.json())

app.use((req, res, next) => {          
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/workouts', workoutRoutes)

// Connect to DB
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        // Listen for Requests
        app.listen(process.env.PORT, () => {
            console.log("Connected to DB and Listening on port")
        })         
    })
    .catch((error) => {
        console.log(error)
    })

