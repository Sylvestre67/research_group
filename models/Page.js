var keystone = require('keystone');
var Types = keystone.Field.Types;

var Page = new keystone.List('Page',{
	autokey: { from:'title', path:'slug', unique:true},
	searchField: 'title'
});

Page.add({
	title:{ type:String, initial: true, default: '', required: true},
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	content: {
		intro: { type: Types.Html, wysiwyg: true, height: 150, default: 'Coming soon...' },
		body: { type: Types.Html, wysiwyg: true, height: 400 },
	},
	publishedOn: { type: Types.Datetime, default: Date.now },
	createdAt: { type: Types.Datetime, default: Date.now },
	updatedAt: { type: Types.Datetime, default: Date.now },

	index: { type: Types.Relationship, ref: 'PageSection', many: false },
});

Page.defaultSort = '-publishedOn';

Page.defaultColumns = 'title|60%, index|20%';

Page.register();

