const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');


router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

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
    const userName = req.body.name;
	const userEmail = req.body.email;
	const userPassword = bcrypt.hash(req.body.password, 10);

/*
  User.create({
    email: userEmail,
    password: (userPassword).toString()
  })
*/

      res
        .status(200)
        .json({ message: 'Good to go' });
      return;
/*
	req.session.save(() => {
	req.session.user_id = userEmail;
	req.session.password = userPassword;
	req.session.logged_in = true;

	res.json({ user: userEmail, password: userPassword, message: 'User Account Created!' });

    });

*/


  } catch (err) {
	console.log(err);
    res.status(400).json(err);
  }
});



module.exports = router;
