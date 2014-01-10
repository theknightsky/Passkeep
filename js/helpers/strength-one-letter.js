define(['handlebars'], function(Handlebars){

	Handlebars.default.registerHelper("getFirstChar", function(string){
	string = string.toString();

	return string.charAt(0);
});

});