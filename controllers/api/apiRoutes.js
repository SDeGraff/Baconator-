const router = require('express').Router();
const Posts = require('../../models');


router.post('/post', async (req, res) => {
	try {

		const postTitle = req.body.title;
		const postMessage = req.body.message;


		const postData = await Posts.create({ title: postTitle, message: postMessage });


		res.status(200).json(postData);

	}
	catch (err) {
		console.log(`Error: ${err}`);
		res.status(400).json(err);
	}
});



module.exports = router;
