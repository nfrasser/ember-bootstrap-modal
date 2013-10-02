// Demo app

window.App = Ember.Application.create({
	rootElement: '#main'
});

App.InfoRoute = Ember.Route.extend(Ember.BSModalRoute, {
});

App.Router.map (function () {
	this.route('info');
});