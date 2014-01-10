define(['config'], function(){
	require([
		'PasswordModel',
		'PasswordList',
		'PasswordView',
		'PasswordListView',
		'SuperSearchView',
		'allPasswords',
		'strength-minified',
		'classie',
		'sideMenu'], function(PasswordModel,PasswordList,PasswordView,PasswordListView,SuperSearchView,allPasswords,classie){

		allPasswords.sort();
		var superSearchView = new SuperSearchView({collection: allPasswords});
		var passwordListView = new PasswordListView({collection: allPasswords});

		$('#superbar').html(superSearchView.el);
		
	});
});