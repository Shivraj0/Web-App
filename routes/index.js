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

module.exports = router;
