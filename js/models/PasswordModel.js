//-------------------------------------//
//---- Model for a single password ----//
//-------------------------------------//

define(['backbone'], function(Backbone){


var PasswordModel = Backbone.Model.extend({
	defaults: {
		id: 0,
		service: 'Service Name',
		password: 'xxxx',
		strength: 'M'
	}
});

return PasswordModel;



});