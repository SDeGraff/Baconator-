const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');
const chalk = require('chalk');

router.post('/login', async (req, res) => {
  try {
	const userData = await User.findOne({ where: { email: req.body.email } });

	if (!userData) {
	  res.status(400).json({ responseMessage: 'Incorrect email or password, please try again.' });
	  return;
	}

	const validPassword = await userData.checkPassword(req.body.password);

	if (!validPassword) {
	  res.status(400).json({ responseMessage: 'Incorrect email or password, please try again.'});
	  return;
	}

	req.session.save(() => {
		req.session.user_id = userData.id;
		req.session.logged_in = true;
	});

	res.json({ user: userData, responseMessage: 'You are now logged in!' });

	} catch (err) {
		res.status(400).json(err);
	}
});

router.post('/logout', (req, res) => {
	if (req.session.logged_in) {
		req.session.destroy(() => {
			res.status(204).end();
		});
	} else {
		res.status(404).end();
	}
});



router.post('/signup', async (req, res) => {
  try {
	const userName = req.body.userName;
	const userEmail = req.body.email;

	const userData = await User.create({
		name: userName,
		email: userEmail,
		password: req.body.password,
		responseMessage: 'User Created'
	})

	res.status(200).json(userData);

	} catch (err) {
		console.log(chalk.red(`Error: ${err}`));
		res.status(400).json(err);
	}
});



router.post('/signup', async (req, res) => {
  try {
	const userName = req.body.userName;
	const userEmail = req.body.email;

	const userData = await User.create({
		name: userName,
		email: userEmail,
		password: req.body.password,
		responseMessage: 'User Created'
	})

	res.status(200).json(userData);

	} catch (err) {
		console.log(chalk.red(`Error: ${err}`));
		res.status(400).json(err);
	}
});




router.post('/post', async (req, res) => {
	try {
		const title = req.body.title;
		const message = req.body.message;
		const postData = await Posts.create(
		{title: title},
		{message: message},
		{responseMessage: 'Post Created'}
		)

		res.status(200).json(postData);
	
		} 
	catch (err) 
		{
			console.log(chalk.red(`Error: ${err}`));
			res.status(400).json(err);
		}
});

router.put('/post', async (req, res) => {
	try {
		const title = req.body.title;
		const message = req.body.message;
		const id = req.body.message;

		const postData = await Posts.update(
			{title: title},
			{message: message},
			{where: {id: id}},
			{responseMessage: 'Post Edited'}
		)
	
		res.status(200).json(postData);

		} 
	catch (err) 
		{
			console.log(chalk.red(`Error: ${err}`));
			res.status(400).json(err);
		}
});

router.delete('/post', async (req, res) => {
	try {
		const id = req.body.id;
		const postData = await Posts.destroy(
		{where: {id: id}},
		{responseMessage: 'Post Deleted'}
		)

		res.status(200).json(postData);

		} 
	catch (err) 
		{
			console.log(chalk.red(`Error: ${err}`));
			res.status(400).json(err);
		}
});



module.exports = router;
