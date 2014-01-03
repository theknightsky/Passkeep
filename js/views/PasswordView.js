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
	checkStrength: function(){
		var cm = this.model,
			pwlength = cm.get('password').length;

		if(pwlength < 8){
			cm.set('strength', 'W');
		}else if(pwlength >= 8 && pwlength < 14){
			cm.set('strength', 'M');
		}else if(pwlength >= 14 && pwlength < 20){
			cm.set('strength', 'S');
		}else if(pwlength >= 20){
			cm.set('strength', 'B');
		}
	},
	render: function(){
		this.checkStrength();
		
		this.$el.html(this.template(this.model.toJSON()));

		return this;
	}
});

return PasswordView;


});