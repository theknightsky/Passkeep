define(['config'], function(){
	require(['PasswordModel','PasswordList','PasswordView', 'PasswordListView', 'SuperbarView', 'allPasswords','strength-minified'], function(PasswordModel,PasswordList,PasswordView,PasswordListView,SuperbarView,allPasswords){

		var superbarView = new SuperbarView({collection: allPasswords});
		var passwordListView = new PasswordListView({collection: allPasswords});

		allPasswords.add({
			id: allPasswords.at(allPasswords.length)+1,
			service: 'New Service',
			password: 'strong-pass12345'
		});
		
	});
});