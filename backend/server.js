const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
// const connectDB = require('./config/db')
const HttpError = require('./models/http-error');
const cors = require('cors')
const app = express()

app.use(bodyParser.json())

const eventsRoutes = require('./routes/event-route')

app.use((req,res,next)=>{
  const error = new HttpError('could not find this route',404);
  throw error;
})
app.use('/api/events',eventsRoutes)

app.use((error,req,res,next,)=>{
  if(res.headerSent){
    return next(error);
  }
  res.status(error.code || 500).json({message:error.message || 'unknown error occured'});
})


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
