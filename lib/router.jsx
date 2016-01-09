FlowRouter.route('/', {
	action: function(params) {
		ReactLayout.render(MainLayout, { content: <BreadcrumbPage />, header: <Location /> });
	}
});