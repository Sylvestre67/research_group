var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = req.params.section;
	locals.filters = {
		section: req.params.section,
	};
	locals.data = {};

	var Page = keystone.list('Page').model;
	var Section = keystone.list('PageSection').model;
	var q_section,q_page;

	view.on('init', function (next) {
		q_section = Section.findOne({
			name: locals.filters.section,
		});

		q_section.exec(function (err, result) {
			locals.data.section = result;
			next(err);
		});
	});

	view.on('init', function (next) {
		q_page = Page.find({
			index: locals.data.section.id
		});

		q_page.exec(function (err, results) {
			locals.data.pages = results;
			next(err);
		});
	});

	// Render the view
	view.render('page_section');
};

