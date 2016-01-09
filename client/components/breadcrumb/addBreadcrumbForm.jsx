AddBreadcrumbForm = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData() {
		return {
			latLng: Geolocation.latLng()
		}
	},
	addBreadcrumb(e) {
		e.preventDefault();
		console.log("added crumb");
		var doc = {
			title: ReactDOM.findDOMNode(this.refs.crumbTitle).value.trim(),
			message: ReactDOM.findDOMNode(this.refs.crumbMessage).value.trim(),
			latLng: this.data.latLng
		}
		var crumb = new Models.Breadcrumb(doc);
		console.log(crumb);
		var status = crumb.save();
		if(status.passes) { e.target.reset(); this.setErrorText(""); }
		else{ this.setErrorText(status.error); }
	},
	setErrorText(text) {
		var error = ReactDOM.findDOMNode(this.refs.errorText);
			error.innerHTML = text;
	},
	render() {
		return(
			<div className="container">
				<form className="add-breadcrumb-form" onSubmit={this.addBreadcrumb} >
					<h3>Leave A Breadcrumb</h3>
					<input
						type="text"
						ref="crumbTitle"
						placeholder="Title" />
					<input
						type="text"
						ref="crumbMessage"
						placeholder="Message" />
					<input
						type="submit"
						value="Submit" />
					<div ref="errorText" className="bg-danger"></div>
				</form>
			</div>
		)
	}
});