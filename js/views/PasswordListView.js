//-------------------------------------//
//---- View for a list of passwords ----//
//-------------------------------------//

define(['backbone', 'handlebars','PasswordView'], function(Backbone,Handlebars,PasswordView){


var PasswordListView = Backbone.View.extend({
	el: '.passwordContainer',
	template: Handlebars.default.compile($('#password-data-template').html()),
	initialize: function(){
		this.render();
	},
	render: function(){
		this.$el.empty();
		this.collection.each(function(passwordModel){
			var passwordView = new PasswordView({model: passwordModel});
			this.$el.append(passwordView.render().el);
		}, this);

		return this;
	}
});

return PasswordListView;


});