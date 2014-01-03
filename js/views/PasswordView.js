//-------------------------------------//
//---- View for a single password ----//
//-------------------------------------//

define(['backbone', 'handlebars'], function(Backbone,Handlebars){


var PasswordView = Backbone.View.extend({
	template: Handlebars.default.compile($('#password-data-template').html()),
	initialize: function(){
		this.model.bind('change', this.render, this);
		this.render();
	},
	events: {
		"click .passtitle": "renderEdit"
	},
	renderEdit: function(){
		var _this = this;
		require(['EditView'], function(EditView){
			var editView = new EditView({model: _this.model});
			_this.$el.html(editView.render().el);
		});
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));

		return this;
	}
});

return PasswordView;


});