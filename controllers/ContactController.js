const { request } = require('express');
const Contact = require('../models/ContactModel');

const contactController = {
  createContact: async (req, res) => {
    try {
      const { email, issue } = req.body;
      const newContact = new Contact({ email, issue });
      await newContact.save();
      res.status(201).json({ message: 'Contact form submitted successfully' });
     
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

module.exports = contactController;
