MainLayout = React.createClass({
	render() {
		return (
			<div>
				<header>{this.props.header}</header>	
		        <main>{this.props.content}</main>
		     </div>
		)
	}
});