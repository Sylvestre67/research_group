var keystone = require('keystone');

exports = module.exports = function (req, res) {
		var view = new keystone.View(req,res);
		var locals = res.locals;

		locals.section = 'publications';
		locals.data = {
			publications : []
		}

		view.on('init', function(next){
			var q = keystone.list('Publication').model.find();

			q.exec(function(err,results){
				locals.data.publications = results;
				next(err);
			})
		})

	view.render('publication')
};