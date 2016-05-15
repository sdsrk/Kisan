'use strict';

var _ = require('lodash');
var Contact = require('./contact.model');
var Message = require('../message/message.model');

// Get list of contacts
exports.index = function(req, res) {
  Contact.find(function (err, contacts) {
    if(err) { return handleError(res, err); }
    return res.json(200, contacts);
  });
};

// Get a single contact
exports.show = function(req, res) {
  Contact.findById(req.params.id, function (err, contact) {
    if(err) { return handleError(res, err); }
    if(!contact) { return res.send(404); }
    return res.json(contact);
  });
};

// Creates a new contact in the DB.
exports.create = function(req, res) {
  Contact.create(req.body, function(err, contact) {
    if(err) { return handleError(res, err); }
    return res.json(201, contact);
  });
};

exports.sendOTP = function(req, res) {

var client = require('twilio')('ACe76142786c59bd768f1403e712727fa6', 'e99a0d6e742c718c9df404ae15c3a09a');

//Send an SMS text message
var resp={sms:false,mail:false};
//console.log(req.body.cell);
client.sendMessage({

    to:req.body.cell, // Any number Twilio can deliver to
    from: '+12102390751', // A number you bought from Twilio and can use for outbound communication
    body: 'One Time Password is:'+req.body.otp // body of the SMS message

}, function(err, responseData) { //this function is executed when a response is received from Twilio

    if (!err) { // "err" is an error received during the request, if any


        console.log(responseData.from); // outputs "+14506667788"
        console.log(responseData.body);
        resp.sms=true;

    }
    else
    {
      console.log(err)
    }
});


  var nodemailer = require('nodemailer');

  var transporter = nodemailer.createTransport('smtps://todoapp51%40gmail.com:9935106755@smtp.gmail.com');

    var mailOptions = {
          from: 'todoapp51@gmail.com', // sender address
          to: req.body.email, // list of receivers
          subject: 'OTP', // Subject line 
          html: "<label>One Time Password is: "+req.body.otp+"</label><br/>"  
      };
      transporter.sendMail(mailOptions, function(error, response) {
           if (error) {
                console.log(error);
                return res.json(404)
           } else {
                console.log('Message sent');
                resp.mail=true;
                return res.json(201,resp)
           }
        });
      var msg= {OTP:req.body.otp,sentTo:req.body.sentTo,sentBy:req.body.sentBy};
  Message.create(msg, function(err, message) {
    if(err) { return handleError(res, err); }
    console.log(msg);
    //return res.json(201, msg);

  });
};

// Updates an existing contact in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Contact.findById(req.params.id, function (err, contact) {
    if (err) { return handleError(res, err); }
    if(!contact) { return res.send(404); }
    var updated = _.merge(contact, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, contact);
    });
  });
};

// Deletes a contact from the DB.
exports.destroy = function(req, res) {
  Contact.findById(req.params.id, function (err, contact) {
    if(err) { return handleError(res, err); }
    if(!contact) { return res.send(404); }
    contact.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}