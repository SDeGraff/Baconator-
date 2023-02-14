const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');


router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again. No user data' });
      return;
    }
console.log(req.body.password);
    const validPassword = await userData.checkPassword(req.body.password);

console.log(validPassword);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again. Password incorrect.'});
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

	res.redirect('/post');

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
		message: 'User Created'
	})

	res
	.status(200)
	.json(userData);

	res.redirect('/login');

  } catch (err) {
	console.log(err);

 //   if(errors.path == 'email') {alert('The data is not valid')};

	res.status(400).json(err);
  }
});



module.exports = router;
