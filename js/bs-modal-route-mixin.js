/**
	Extend your route with this mixin to create a route that's rendered
	into a Boostrap modal

	Prerequisites: "bs-modal" outlet in the application template

	Note: If you are overwriting the `setupController` or `renderTemplate`
	methods, be sure to call `this._super()` from your new methods.
*/
Ember.BSModalRouteMixin = Ember.Mixin.create({

	modalTemplateName: 'bs-modal-view',

	bodyTemplateName: '',
	headerTemplateName: '',
	footerTemplateName: '',

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
	renderTemplate: function () {

		var controller = this.get('controller'),

			modalTemplateName	= this.get('modalTemplateName'),

			bodyTemplateName	= this.get('bodyTemplateName'),
			headerTemplateName	= this.get('headerTemplateName'),
			footerTemplateName	= this.get('footerTemplateName'),

			hasHeader = !Em.isEmpty(headerTemplateName),
			hasFooter = !Em.isEmpty(footerTemplateName);

		// Requires a modal template
		Em.assert(
			'Requires a "bodyTemplateName" property to determine the template to use for the modal',
			!Ember.isEmpty(bodyTemplateName)
		);

		// Figure out if we need headers/footers
		controller.set('hasBSModalHeader', hasHeader);
		controller.set('hasBSModalFooter', hasFooter);

		// Render the template for the modal
		this.render(modalTemplateName, {
			into: 'application',
			outlet: 'bs-modal',
			controller: controller
		});

		// Fill the modal up with content
		this.render(bodyTemplateName, {
			into: modalTemplateName,
			outlet: 'modal-body',
			controller: controller
		});

		if (hasHeader) {
			this.render(headerTemplateName, {
				into: modalTemplateName,
				outlet: 'modal-header',
				controller: controller
			});
		}

		if (hasFooter) {
			this.render(footerTemplateName, {
				into: modalTemplateName,
				outlet: 'modal-footer',
				controller: controller
			});
		}

	},

	// Clear the template from a specific outlet
	_clearOutlet: function (container, outlet) {
		var parentView = this.router._lookupActiveView(container);
		parentView.disconnectOutlet(outlet);
	},

	/**
		Clears the modal outlet from the application template

		@method	deactivate
	*/
	deactivate: function () {
		this._super();
		this._clearOutlet('application', 'bs-modal');
	}
});
