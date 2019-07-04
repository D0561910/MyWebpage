var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET home page. */
router.get('/bg_color_animation', function(req, res, next) {
  res.render('Bg_color_animation');
});

/* GET Card Slider page. */
router.get('/cardslider', function(req, res, next) {
  res.render('cardslider');
});

/* GET Day & Night Mode page. */
router.get('/B&W_Mode', function(req, res, next) {
  res.render('day&nightmode');
});

/* GET Dropdown Menu page. */
router.get('/dropdown_menu_1', function(req, res, next) {
  res.render('dropdownmenu1');
});

/* GET Dropdown Menu page. */
router.get('/dropdown_menu_2', function(req, res, next) {
  res.render('dropdownmenu2');
});

/* GET Dropdown Menu page. */
router.get('/dropdown_menu_3', function(req, res, next) {
  res.render('dropdownmenu3');
});

/* GET Form & Alert page. */
router.get('/form_alert', function(req, res, next) {
  res.render('form&alert');
});

/* GET Form & Javascript page. */
router.get('/form_script', function(req, res, next) {
  res.render('form&javascript');
});

/* GET Hover Effect page. */
router.get('/hovereffect', function(req, res, next) {
  res.render('hovereffect');
});

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

/* GET Scroll Animation page. */
router.get('/scrollanimation', function(req, res, next) {
  res.render('scrollanimation');
});

/* GET Sign Up page. */
router.get('/sign_up', function(req, res, next) {
  res.render('signup');
});

/* GET Split Screen page. */
router.get('/splitscreen', function(req, res, next) {
  res.render('splitscreen');
});

/* GET Table page. */
router.get('/table', function(req, res, next) {
  res.render('tableview');
});

/* GET Text Animation page. */
router.get('/text_animation_1', function(req, res, next) {
  res.render('textanimation1');
});

/* GET Text Animation page. */
router.get('/text_animation_2', function(req, res, next) {
  res.render('textanimation2');
});

/* GET Shiny Text Animation page. */
router.get('/text_animation_3', function(req, res, next) {
  res.render('textanimation3');
});

/* GET Text Rotate Animation page. */
router.get('/text_animation_4', function(req, res, next) {
  res.render('textanimation4');
});

/* GET Shiny Text Animation page. */
router.get('/validate_form', function(req, res, next) {
  res.render('validateform');
});

/* GET Youtube Player page. */
router.get('/youtube_example', function(req, res, next) {
  res.render('youtubeplayer');
});

module.exports = router;
