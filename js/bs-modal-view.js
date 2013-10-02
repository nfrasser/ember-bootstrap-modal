Ember.BSModalView = Ember.View.extend({

	classNames: ['modal', 'fade'],
	templateName: 'bs-modal',

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
		return Em.isNone(controller) ?  null : controller.back();

		//var controller = this.get('controller');
		//return Ember.isNone(controller) ?  null :  controller.back();
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
