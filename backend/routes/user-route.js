const { Router } = require('express');
const express = require('express')
const HttpError = require('../models/http-error');
const router = express.Router();
const userController = require('../controllers/user-controller');

const fileUpload = require('../middleware/file-upload');

// router.post('/signup',fileUpload.single('image'),userController.signup)
router.post('/signup',userController.signup)
router.post('/login',userController.login)

module.exports = router