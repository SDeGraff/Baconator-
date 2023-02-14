const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
	Post.findAll({
		include: [
			{
				model: User
			}
		]
	})
	.then(posts => {
		console.log(posts);
		posts = posts.map(post => post.get({ plain: true }));
		res.render('homepage', { posts });
	})
	.catch(err => {
		console.log(err);
		res.status(500).json(err);
	});
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
