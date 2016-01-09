BreadcrumbListItem = React.createClass({
	render() {
		return(
			<li className="list-group-item">
				<div className="list-group-item-heading">
					{this.props.breadcrumb.title}
				</div>
				<div className="list-group-item-text">
					{this.props.breadcrumb.latLng.lat}, {this.props.breadcrumb.latLng.lng}
				</div>
			</li>
		)
	}
});