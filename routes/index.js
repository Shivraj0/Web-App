var express = require('express');
var router = express.Router();

/* GET Express page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home Page' });
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({}, {}, function(e, docs) {
    res.render('userlist', {
      title: "Userlist",
      "userlist": docs
    });
  });
});

/* GET New user page. */
router.get('/newuser', function(req, res) {
  res.render('newuser', {
    title: 'Add new user'
  });
});

/* POST to adduser service. */
router.post('/adduser', function(req, res) {
  // Set internal db variable.
  var db = req.db;

  // Get form values.
  var userName = req.body.username;
  var userEmail = req.body.useremail;

  // Set db collection.
  var collection = db.get('usercollection');

  // Insert in db.
  collection.insert({
    "username": userName,
    "email": userEmail
  }, function(err, doc) {
    if(err) {
      res.send('There was a problem adding data in db.')
    } else {
      res.redirect('/userlist');
    }
  });
});

module.exports = router;
