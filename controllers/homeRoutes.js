const router = require('express').Router();
const sequelize = require('../config/connection');
const {Post} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
	try {
		const [posts, metadata] = await sequelize.query("Select * from Posts order by ID DESC");
		console.log(JSON.stringify(posts));

		res.render('homepage', { posts });
	} catch (err) {
		res.status(500).json(err);
		console.log(err);
	}
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
