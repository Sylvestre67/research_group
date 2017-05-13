var keystone = require('keystone');

/**
 * PageSection Model
 * ==================
 */

var PageSection = new keystone.List('PageSection', {
	autokey: { from:'name', path:'slug', unique:true },
});

PageSection.add({
	name: { type: String, required: true, default: 'new_section' },
	position: { type: Number, required: true, default: 0 },
});

PageSection.relationship(
	{ ref: 'Page', path: 'pages', refPath: 'index' }
);

PageSection.defaultSort = '-name';
PageSection.defaultColumns = 'name|60%';

PageSection.register();