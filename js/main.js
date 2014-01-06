define(['config'], function(){
	require(['PasswordModel','PasswordList','PasswordView', 'PasswordListView', 'SuperbarView', 'allPasswords','strength-minified'], function(PasswordModel,PasswordList,PasswordView,PasswordListView,SuperbarView,allPasswords){

		allPasswords.sort();
		var superbarView = new SuperbarView({collection: allPasswords});
		var passwordListView = new PasswordListView({collection: allPasswords});
		
	});
});