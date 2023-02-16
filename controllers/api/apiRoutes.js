const router = require('express').Router();
const { Post } = require('../../models');


router.post('/post', async (req, res) => {
	try {

	console.log(req);
	console.log(res);
	
		const title = req.body.title;
		const message = req.body.message;
		const postData = await Post.create(
			{ title: title },
			{ message: message },
			{ responseMessage: 'Post Created' }
		)

		res.status(200).json(postData);

	}
	catch (err) {
		console.log(`Error: ${err}`);
		res.status(400).json(err);
	}
});



module.exports = router;
