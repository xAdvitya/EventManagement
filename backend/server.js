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
const cors = require('cors');



const app = express()
app.use(cors());

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*')
  res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept,Authorization')
  res.setHeader('Access-Control-Allow-Methods','GET, POST, DELETE, PATCH')
  next();
})

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const eventsRoutes = require('./routes/event-route')
const usersRoutes = require('./routes/user-route')

app.use('/api/events',eventsRoutes)
app.use('/api/users',usersRoutes)


app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500)
  res.json({message: error.message || 'An unknown error occurred!'});
});

dotenv.config({ path: './config/config.env' })

const PORT = process.env.PORT || 5000

mongoose
  .connect(process.env.MONGO_URI,{
    useUnifiedTopology:true,
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(()=>{
    app.listen(
      PORT,
      console.log(`Server running on port ${PORT}`)
    )
  })
  .catch(err=>{
    console.log(err)
  })


