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
		"click .editButton": "renderEdit",
		"click .saveEdits": "saveEdits"
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
			password: this.$el.find('.passwordEdit').val()
		});
		this.render();
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));

		return this;
	}
});

return PasswordView;


});