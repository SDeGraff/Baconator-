const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
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

router.get('/post', (req, res) => {
	res.render('post');
});

module.exports = router;
