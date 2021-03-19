const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
// const connectDB = require('./config/db')
const cors = require('cors')
const app = express()

const eventsRoutes = require('./routes/event-route')

app.use('/api/events',eventsRoutes)



dotenv.config({ path: './config/config.env' })

const PORT = process.env.PORT || 3000

// Body parser
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }))
app.use(express.json()) 
app.use(cors());




app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
