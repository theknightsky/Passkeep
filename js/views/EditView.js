//-------------------------------------//
//---- EditView for a single password ----//
//-------------------------------------//

define(['backbone', 'handlebars'], function(Backbone, Handlebars){
var EditView = Backbone.View.extend({
	tagName: 'form',
	template: Handlebars.default.compile($('#password-edit-template').html()),
	events: {
		"click input[type='submit']": "renderPasswordView"
	},
	renderPasswordView: function(e){
		e.preventDefault();

		this.model.set({
			service: this.$el.find('.passTitleEdit').val(),
			password: this.$el.find('.passwordEdit').val()
		});

		var _this = this;

		require(['PasswordView'], function(PasswordView){
			var passwordView = new PasswordView({model: _this.model});
			$('body').html(passwordView.el);
		});
	},
	initialize: function(){this.render();},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));

		return this;
	}
});

return EditView;

});