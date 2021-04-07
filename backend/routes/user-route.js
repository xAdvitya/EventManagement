const { Router } = require('express');
const express = require('express')
const HttpError = require('../models/http-error');
const router = express.Router();
const userController = require('../controllers/user-controller')

router.post('/signup',userController.signup)
router.post('/login',userController.login)

module.exports = router