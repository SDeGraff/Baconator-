const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
	res.render('homepage');
});

router.get('/login', (req, res) => {
	res.render('login');
});

router.get('/signup', (req, res) => {
	res.render('signup');
});

router.get('/logout', (req, res) => {
	res.render('homepage');
});

router.get('/createpost', withAuth, (req, res) => {
	res.render('create-post');
});

router.get('/editpost', withAuth, (req, res) => {
	res.render('edit-post');
});

module.exports = router;
