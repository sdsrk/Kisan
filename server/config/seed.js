/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Contact = require('../api/contact/contact.model');
var Message = require('../api/message/message.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});
Message.find({}).remove(function() {
  Message.create({
    OTP: '123456',
    sentTo: '57381dd31d33c674278c5784',
    sentBy: '57381dd31d33c674278c5784',
  }, {
     OTP: '123457',
    sentTo: '57381dd31d33c674278c5784',
    sentBy: '57381dd31d33c674278c5784',
  }, function() {
      console.log('finished populating message');
    }
  );
});

Contact.find({}).remove(function() {
  Contact.create({
    fname: 'shardul',
    lname: 'singh',
    phNo: '+919550944219',
    email: 'sdsrk@outlook.com'
  }, {
   fname: 'Deep',
    lname: 'Mishra',
    phNo: '+917045975516',
    email: 'shardul315@gmail.com'
  },
  {
    fname: 'shardul',
    lname: 'singh',
    phNo: '+919550944219',
    email: 'sdsrk@outlook.com'
  }, {
   fname: 'Deep',
    lname: 'Mishra',
    phNo: '+917045975516',
    email: 'shardul315@gmail.com'
  },
  {
    fname: 'shardul',
    lname: 'singh',
    phNo: '+919550944219',
    email: 'sdsrk@outlook.com'
  }, {
   fname: 'Deep',
    lname: 'Mishra',
    phNo: '+917045975516',
    email: 'shardul315@gmail.com'
  }, function() {
      console.log('finished populating contact');
    }
  );
});