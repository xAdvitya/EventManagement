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

dotenv.config({ path: './config/config.env' })


const app = express()
const PORT = process.env.PORT || 3000

// Body parser
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }))
app.use(express.json()) 
app.use(cors());


app.get('/',(req,res)=>{
    res.status(200).send("helooo")
})

app.get('/login',(req,res)=>{
  const user = {
    email:req.body.email,
    familyName:req.body.familyName,
    givenName:req.body.givenName,
    googleId:req.body.googleId,
    imageUrl:req.body.imageUrl,
    name:req.body.name
  }

  console.log(`heloooooo ${user}`)
})


app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
