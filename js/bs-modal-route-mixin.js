/**
	Extend your route with this mixin to create a route that's rendered
	into a Boostrap modal

	Prerequisites: "bs-modal" outlet in the application template

	Note: If you are overwriting the `setupController` or `renderTemplate`
	methods, be sure to call `this._super()` from your new methods.
*/
Ember.BSModalRouteMixin = Ember.Mixin.create({

	modalTemplateName: 'bs-modal'

	/**
		Loads the provided modal templates into their outlets.
		Will render the modal template into `{{outlet modal}}`, and will
		render the contents into the modal's `{{outlet}}`. By default the
		modal uses Twitter Bootstrap and is handled through
		`Core.ModalView`

		@method	renderTemplate
		@protected
	*/
	/**
		Loads the provided modal templates into their outlets.
		Will render the modal template into `{{outlet modal}}`, and will
		render the contents into the modal's `{{outlet}}`. By default the
		modal uses Twitter Bootstrap and is handled through
		`Core.ModalView`

		@method	renderTemplate
		@protected
	*/
	renderTemplate: function() {

		var controller = this.controllerFor(this.get('controllerName')),

			modalTemplateName	= this.get('modalTemplateName'),
			contentTemplateName	= this.get('templateName');

		// Requires a modal template
		this.assert(
			'Requires a "modalTemplateName" property to determine the template to use for the modal',
			!Ember.isEmpty(modalTemplateName)
		);

		// The modal requires a controller
		this.assert(
			'Requires a "controllerName" property to determine the controller of the modal template',
			!Ember.isEmpty(controller)
		);

		// Render the template for the modal
		this.render(modalTemplateName, {
			into: 'application',
			outlet: 'modal',
			controller: controller
		});

		// Fill the modal up with content
		this.render(contentTemplateName, {
			into: modalTemplateName,
			controller: controller
		});
	},

	// Clear the template from a specific outlet
	clearOutlet: function(container, outlet) {
		var parentView = this.router._lookupActiveView(container);
		parentView.disconnectOutlet(outlet);
	},

	/**
		Clears the modal outlet from the application template

		@method	deactivate
	*/
	deactivate: function() {
		this._super();
		this.clearOutlet('application', 'modal');
	}
});
