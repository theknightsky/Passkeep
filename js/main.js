define(['config'], function(){
	require(['PasswordModel','PasswordList','PasswordView', 'PasswordListView'], function(PasswordModel,PasswordList,PasswordView,PasswordListView){

		var passwordList = new PasswordList([
		{
			id: 01,
			service: 'Phone Password',
			password: 'phone-12345'
		},
		{
			id: 02,
			service: 'Tablet Password',
			password: 'tablet-12345'
		},
		{
			id: 03,
			service: 'Computer Password',
			password: 'computer-12345'
		}
		]);

		var passwordListView = new PasswordListView({collection: passwordList});

		passwordList.add({
			id: passwordList.at(passwordList.length)+1,
			service: 'New Service',
			password: 'New Service-12345'
		});
		passwordListView.render();
		
	});
});