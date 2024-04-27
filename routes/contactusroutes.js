const contactController = require('../controllers/ContactController');

const express = require('express');
const contactrouter = express.Router();

// Contact form submission route
contactrouter.post('/contactus', contactController.createContact);

module.exports = contactrouter;
