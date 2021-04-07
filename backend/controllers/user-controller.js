const HttpError = require('../models/http-error');
const { v4: uuidv4 } = require('uuid');

DUMMY_USERS = [{
    name:'bikaraj',
    email:'bika@remail.com',
    password:'kk'
}]

const signup = (req,res,next)=>{
    const {name,email,password} = req.body;

    const hasUser =  DUMMY_USERS.find(u=>u.email === email);
    if(!hasUser){
        throw new HttpError('could not create user email exists',422);
    }


    const createUser = {
        id:uuidv4(),
        name,
        email,
        password
    };
    DUMMY_USERS.push(createUser)
    res.status(201).json({user:createUser})
}

const login = (req,res,next)=>{
    const {email,password} = req.body
    const identifiedUser = DUMMY_USERS.find(
        u=>u.email ===email
    )
    if(!identifiedUser || identifiedUser.password != password){
        throw new HttpError('wrong credentials',401)
    }

    res.json({message:'logged in !'})
}


exports.signup = signup;
exports.login = login;