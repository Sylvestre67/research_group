var keystone = require('keystone');
var Types = keystone.Field.Types;

var Publication = new keystone.List('Publication',{
	autokey: {from:'title',path:'slug',unique:true},
	searchField: 'title'
});

Publication.add({
	title:{ type:String, initial: true, default: '', required: true},
	journal: { type:String, initial: true, default: '', required: true},
	reference: { type:String, initial: true, default: '', required: true},
	publishedOn: { type: Types.Datetime, default: Date.now },
	createdAt: { type: Types.Datetime, default: Date.now },
	updatedAt: { type: Types.Datetime, default: Date.now },
});

Publication.defaultSort = '-publishedOn';

Publication.defaultColumns = 'title|60%, journal|20%, reference|20%';

Publication.register();

