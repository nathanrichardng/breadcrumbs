Meteor.methods({
    'saveBreadcrumb': function(doc){
    	var crumb = Collections.Breadcrumbs.upsert({ _id: this._id }, doc);
    	console.log(crumb);
    	return crumb.insertedId || doc._id;
    }
});