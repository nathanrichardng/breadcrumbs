BreadcrumbList = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData() {
		return {
	  		breadcrumbs: Collections.Breadcrumbs.find({}).fetch()
	  	}
	},
	renderBreadcrumbs() {
		return this.data.breadcrumbs.map( (breadcrumb) => {
			return <BreadcrumbListItem key={breadcrumb._id} breadcrumb={breadcrumb}/>
		});
	},
	handleEvent(e) {
		e.preventDefault();
	},
	render() {
		return(
			<div className="container">
		        <header>
		          <h1>Breadcrumbs</h1>
		        </header>
		        <ul className="list-group">
		          {this.renderBreadcrumbs()}
		        </ul>
		    </div>
		)
	}
});