var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET Day & Night Mode page. */
router.get('/B&W_Mode', function(req, res, next) {
  res.render('day&nightmode');
});;

/* GET Form & Alert page. */
router.get('/form_alert', function(req, res, next) {
  res.render('form&alert');
});

/* GET Form & Javascript page. */
router.get('/form_script', function(req, res, next) {
  res.render('form&javascript');
})

/* GET list page. */
router.get('/list', function(req, res, next) {
  res.render('list');
});

/* GET Login page. */
router.get('/login_page', function(req, res, next) {
  res.render('loginpage');
});

/* GET navbar & dropdown menu page. */
router.get('/navbar', function(req, res, next) {
  res.render('navbar&dropdownmenu');
});

/* GET navbar view page. */
router.get('/navbar_view', function(req, res, next) {
  res.render('navbarview');
});

/* GET Table page. */
router.get('/table', function(req, res, next) {
  res.render('tableview');
});

/* GET Text animation page. */
router.get('/text_animation', function(req, res, next) {
  res.render('textanimation');
});

/* GET Youtube Player page. */
router.get('/youtube_example', function(req, res, next) {
  res.render('youtubeplayer');
});

module.exports = router;
