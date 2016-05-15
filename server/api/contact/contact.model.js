'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ContactSchema = new Schema({
  fname: String,
  lname: String,
  phNo: String,
  email: String
});

module.exports = mongoose.model('Contact', ContactSchema);