require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { configDotenv, config } = require('dotenv')
const { connectDB } = require('./config/db')
const dashboardRoutes = require('./routes/dashboard')
const errorhandler = require('./middleware/error')
const colors = require('colors')

config({ path: './config/config.env' })

connectDB();

const app = express();
const PORT = 5000;

app.use(cors())
app.use(express.json()) 

// Routes
app.use('/api/dashboard', dashboardRoutes)
app.use(errorhandler)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.yellow.bold)
})

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red.bold);
})
