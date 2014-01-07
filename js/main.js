define(['config'], function(){
	require(['PasswordModel','PasswordList','PasswordView', 'PasswordListView', 'SuperSearchView', 'allPasswords','strength-minified'], function(PasswordModel,PasswordList,PasswordView,PasswordListView,SuperSearchView,allPasswords){

		allPasswords.sort();
		var superSearchView = new SuperSearchView({collection: allPasswords});
		var passwordListView = new PasswordListView({collection: allPasswords});

		$('#superbar').html(superSearchView.el);
		
	});
});