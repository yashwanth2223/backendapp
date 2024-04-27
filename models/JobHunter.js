const mongoose = require("mongoose")

const jobhunterschema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
      },
      gender: {
        type: String,
        required:true,
        enum: ['male', 'female','Non-binary','Genderqueer','Genderfluid','Bigender','Agender','Demiboy','others']
      },
      dateofbirth: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true
      },
      location: {
        type: String,
        required: true
      },
      contact: {
          type: String,
          required: true,
          unique:true
        },
    });

const  jobhunter = mongoose.model('JobHunter',jobhunterschema)

module.exports = jobhunter;