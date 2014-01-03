//-------------------------------------//
//---- Model for a list of passwords ----//
//-------------------------------------//

define(['backbone', 'PasswordModel'], function(Backbone, PasswordModel){


var PasswordList = Backbone.Collection.extend({
	model: PasswordModel
});

return PasswordList;


});