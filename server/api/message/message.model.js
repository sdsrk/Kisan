'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MessageSchema = new Schema({
  OTP: String,
  sentTo: {type: mongoose.Schema.Types.ObjectId,ref:'Contact'},
  sentBy: {type: mongoose.Schema.Types.ObjectId,ref:'User'},
  lastModified:{ type: Date, default: Date.now },
  active: Boolean
});

module.exports = mongoose.model('Message', MessageSchema);