//-------------------------------------//
//---- EditView for a single password ----//
//-------------------------------------//

define(['backbone', 'handlebars'], function(Backbone, Handlebars){
var EditView = Backbone.View.extend({
	tagName: 'form',
	className: 'editForm',
	template: Handlebars.default.compile($('#password-edit-template').html()),
	initialize: function(){this.render();},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		this.$el.find('#passwordTitle').focus();

		return this;
	}
});

return EditView;

});