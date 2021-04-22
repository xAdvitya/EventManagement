const HttpError = require('../models/http-error');
const { v4: uuidv4 } = require('uuid');
const User = require('../models/user');

DUMMY_USERS = [{
    name:'bikaraj',
    email:'bika@remail.com',
    password:'kk'
}]

const signup = async (req,res,next)=>{

    const {name,email,password} = req.body;
    let existingUser;
    try{
        existingUser = await User.findOne({email:email})
    }catch(err){
        const error = new HttpError('signing up failed,please try again',500);
        return next(error);
    }
    if(existingUser){
        const error = new HttpError('user exists already',422);
        return next(error);
    }

    const createdUser = new User({
        name,
        email,
        image:'https://static.wikia.nocookie.net/naruto/images/b/bb/Itachi.png/revision/latest?cb=20160125182202',
        password,
        events:[]
    })
    try{
        await createdUser.save();
        }
        catch(err){

            const error = new HttpError('sign up failed',500);
            return next(error);
        }  
    res.status(201).json({user:createdUser.toObject({getters:true})});
}

const login = async (req,res,next)=>{
    const {email,password} = req.body
    let existingUser;
    try{
        existingUser = await User.findOne({email:email})
    }catch(err){
        const error = new HttpError('Logging in failed,please try again',500);
        return next(error);
    }

    if(!existingUser || existingUser.password !== password){
        const error = new HttpError('invaild credentials',401);
        return next(error);
    }

    res.json({message:'logged in !',user:existingUser.toObject({getters:true})})
}


exports.signup = signup;
exports.login = login;