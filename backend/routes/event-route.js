const { Router } = require('express');
const express = require('express')
const HttpError = require('../models/http-error');
const router = express.Router();
const eventController = require('../controllers/event-controller')


router.get('/:eid',eventController.getEventsById);

router.get('/user/:uid',eventController.getEventsByUserId);

router.delete('/:eid',eventController.deleteEvent);

router.post('/',eventController.createEvent)

router.get('/',eventController.getEvents)

module.exports = router;
