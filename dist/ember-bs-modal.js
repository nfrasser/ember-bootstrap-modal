(function() {

(function() {

Ember.TEMPLATES["bs-close"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("&times;\n");
  
});

Ember.TEMPLATES["bs-modal-view"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n	");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['with'].call(depth0, "", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n		");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "bs-modal", options) : helperMissing.call(depth0, "partial", "bs-modal", options))));
  data.buffer.push("\n	");
  return buffer;
  }

  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.view.call(depth0, "Ember.BSModalRouteView", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["_bs-modal"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n			<div class=\"modal-header\">\n				");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "view.close", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n				");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet || depth0.outlet),stack1 ? stack1.call(depth0, "modal-header", options) : helperMissing.call(depth0, "outlet", "modal-header", options))));
  data.buffer.push("\n			</div>\n		");
  return buffer;
  }

function program3(depth0,data) {
  
  var hashTypes, hashContexts;
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "view.close", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n			<div class=\"modal-footer\">\n				");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet || depth0.outlet),stack1 ? stack1.call(depth0, "modal-footer", options) : helperMissing.call(depth0, "outlet", "modal-footer", options))));
  data.buffer.push("\n			</div>\n		");
  return buffer;
  }

  data.buffer.push("\n");
  data.buffer.push("\n<div class=\"modal-dialog\">\n	<div class=\"modal-content\">\n		");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.hasBSModalHeader", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n		<div class=\"modal-body\">\n			");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "controller.hasBSModalHeader", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet || depth0.outlet),stack1 ? stack1.call(depth0, "modal-body", options) : helperMissing.call(depth0, "outlet", "modal-body", options))));
  data.buffer.push("\n		</div>\n\n		");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "controller.hasBSModalFooter", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n	</div>");
  data.buffer.push("\n</div>");
  data.buffer.push("\n");
  return buffer;
  
});

})();

(function() {

/**
	View used for rendering the modal
*/
Ember.BSModalRouteView = Ember.View.extend({

	classNames: ['modal', 'fade'],
	tagName: 'div',

	/**
		backdrop options:
		 * `false`		(No backdrop)
		 * `true`		(Backdrop)
		 * `'static'`	(Backdrop that doesn't close the modal when it's clicked)
	*/
	backdrop: true,

	/**
 		Can the keyboard be used to control the modal?
	*/
	keyboard: true,

	/**
		Call this hide function when closing the modal
	*/
	hide: function () {
		this.$().modal('hide');

		var controller = this.get('controller');

		this.set('_isShown', false);
		return Em.isNone(controller) ||
			Em.typeOf(Ember.get(controller, 'back')) !== 'function' ?
			history.back() : controller.back();
	},

	activate: function () {

		this.show();

		Ember.run.next(this, function () {

			var modal = this;

			// When the modal hides, transition to the specified route
			// Will go to the route 'previousRouteName', as specified in the controller

			this.$().one('hidden.bs.modal', function () {
				modal.hide();
			});

		});
	},

	show: function () {

		this.$().modal({
			backdrop: this.get('backdrop'),
			keyboard: this.get('keyboard')
		});

		this.set('_isShown', true);

	},

	// The modal's close button
	close: Ember.View.extend({
		tagName: 'button',
		classNames: ['close'],
		attributeBindings: ['type', 'aria-hidden'],

		templateName: 'bs-close',

		type: "button",
		'aria-hidden': "true",

		click: function() {
			this.get('parentView').hide();
		}
	}),

	didInsertElement: function() {

		var controller = this.get('controller');

		// Set up the backdrop and keyboard based on whatever was
		// specified in the controller

		if ( !Ember.isNone(controller.get('modalBackdrop')) )  {
			this.set('backdrop', controller.get('modalBackdrop'));
		}
		if ( !Ember.isNone(controller.get('modalKeyboard')) )  {
			this.set('keyboard', controller.get('modalKeyboard'));
		}

		Em.assert(
			[
				"Please include the Twitter Bootstrap Modal",
				"(http://getbootstrap.com/javascript/#modals)",
				"to use the Modal Route."
			].join(' '),
			!Em.isNone(Em.$.fn.modal)
		);

		this.activate();
	},

	willDestroyElement: function() {
		this.$().modal('hide');
		Ember.$('body').removeClass('modal-open');

		this.$().off('hidden.bs.modal');
	}
});

/**
	The regular modal view is a general purpose modal
*/
Ember.BSModalView = Ember.BSModalRouteView.extend({
	templateName: '_bs-modal'
});


})();

(function() {

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


})();

})();