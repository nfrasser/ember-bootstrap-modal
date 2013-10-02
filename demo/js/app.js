// Demo app

window.App = Ember.Application.create({
	rootElement: '#main'
});

App.InfoRoute = Ember.Route.extend(Ember.BSModalRouteMixin, {
	bodyTemplateName: 'info',
	headerTemplateName: 'info-header',
	footerTemplateName: 'info-footer'
});

App.Router.map (function () {
	this.route('info');
});
