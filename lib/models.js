Models = {
	Breadcrumb: breadcrumb
}

function breadcrumb(doc) {
	var breadcrumb = {
		latLng: Geolocation.latLng(),
		createdBy: doc.createdBy,
		title: doc.title,
		message: doc.message,
		save: save,
		validation: validation
	}

	function save() {
		var validation = this.validation();
		if (validation.passes) {
			Meteor.call('saveBreadcrumb', this, function(error, result){ 
				this._id = result;
				console.log(Collections.Breadcrumbs.findOne(this._id));
			}); 
		}
		else {
			console.log(validation.error)
		}
		return validation;
	}

	function validation() {
		var validator = new Validator();
			validator.checkString(this.title, "Please enter a valid title.");
			validator.checkString(this.message, "Please enter a valid message.");
			return validator.status;
	}

	return breadcrumb;
}