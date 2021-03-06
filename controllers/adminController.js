var postModel = require('../models/postModel');

var adminController = module.exports = {

	createPost: function (req,res){
			var allTags = req.body.postTags.split(',');
		    var vimeoURL = (req.body.videoSource).slice(17);

			var post = new postModel({
				title:req.body.title,
				description: req.body.postDescription,
				videoSource: vimeoURL,
				tags: allTags,
				date: Date.now(),
		        blogPost: req.body.blogPost === 'blogPost',
		        triImage: req.body.triImage === 'triImage',
		        quarterImage: req.body.quadImage === 'quarterImage',
		        imageSource: req.body.imageSource,
		        blogURL: req.body.blogURL
			});

			post.save(function (err,doc){
				res.send(doc)
				console.log(err)
			});
	}
}