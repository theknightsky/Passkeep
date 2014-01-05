//-------------------------------------//
//---- Model for a single password ----//
//-------------------------------------//

define(['backbone'], function(Backbone){


var PasswordModel = Backbone.Model.extend({
	defaults: {
		id: 0,
		service: 'Service Name',
		password: 'xxxx',
		visible: false
	},
	initialize: function(){
		this.checkStrength();
		this.setHidden();
	},
	checkStrength: function(){
		var	pwlength = this.get('password').length;

		if(pwlength < 8){
			this.set('strength', 'Weak');
		}else if(pwlength >= 8 && pwlength < 14){
			this.set('strength', 'Medium');
		}else if(pwlength >= 14 && pwlength < 20){
			this.set('strength', 'Strong');
		}else if(pwlength >= 20){
			this.set('strength', 'Best');
		}
	},
	setHidden: function() {
		var length = this.get('password').length;
		var hiddenLength = '';
		for(var i = 0; i < length; i++){
			hiddenLength += '*';

		}
		hiddenLength += '('+length+')';
		this.set('hidden', hiddenLength);
	},
});

return PasswordModel;



});