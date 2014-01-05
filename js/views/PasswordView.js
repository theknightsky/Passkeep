//-------------------------------------//
//---- View for a single password ----//
//-------------------------------------//

define(['backbone', 'handlebars'], function(Backbone,Handlebars){


var PasswordView = Backbone.View.extend({
	template: Handlebars.default.compile($('#password-data-template').html()),
	initialize: function(){
		this.render();
	},

	events: {
		'click .editButton': 'renderEdit',
		'click .saveEdits': 'saveEdits',
		'click .cancelEdits': 'cancelEdits',
		'click .showPassword': 'showPassword',
		'keydown': 'keyDown'
	},

	renderEdit: function(){
		var _this = this;
		require(['EditView'], function(EditView){
			var editView = new EditView({model: _this.model});
			_this.$el.html(editView.render().el);
		});
	},

	saveEdits: function(e){
		e.preventDefault();

		this.model.set({
			service: this.$el.find('.passTitleEdit').val(),
			password: this.$el.find('.passwordEdit').val(),
			visible: false
		});
		this.model.checkStrength();

		this.render();
	},

	cancelEdits: function(e){
		e.preventDefault();
		this.render();
	},

	showPassword: function(e){
		e.preventDefault();
		var cm = this.model;
		if(cm.get('visible') == false){
			cm.set('visible', true);
		}else{
			this.passwordVisible = false;
			cm.set('visible', false);
		}
		this.render();
	},

	keyDown: function(e){
		if(e.keyCode === 13){
			this.saveEdits(e);
		}
	},

	render: function(){
		
		this.$el.html(this.template(this.model.toJSON()));

		return this;
	}
});

return PasswordView;


});