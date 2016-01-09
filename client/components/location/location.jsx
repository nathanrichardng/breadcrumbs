Location = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData() {
		var data = {};
			data.location = {lat: null, lng: null};
		var location = Geolocation.latLng();
		if(location) {
			data.location = location;
		}
		return data;
	},
	render() {
		return(
			<div className="container">
				Location: {this.data.location.lat}, {this.data.location.lng}
			</div>
		)
	}
});