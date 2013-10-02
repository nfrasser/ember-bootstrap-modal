/**
	Extend your route with this mixin to create a route that's rendered
	into a Boostrap modal
*/
require('js/bs-modal-view.js');

/**
	Mixin for routes which should render as modals
*/
Ember.BSModalRouteMixin = Ember.Mixin.create({
	modalTemplateName: 'bs-modal'
});
