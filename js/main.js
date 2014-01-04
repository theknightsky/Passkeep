define(['config'], function(){
	require(['PasswordModel','PasswordList','PasswordView', 'PasswordListView'], function(PasswordModel,PasswordList,PasswordView,PasswordListView){

		var passwordList = new PasswordList([
		{
			id: 01,
			service: 'Gmail',
			password: 'weak'
		},
		{
			id: 02,
			service: 'Zions Bank',
			password: 'tablet-12345'
		},
		{
			id: 03,
			service: 'Apartment Rent Password',
			password: 'computer-123456789'
		}
		]);

		var passwordListView = new PasswordListView({collection: passwordList});

		passwordList.add({
			id: passwordList.at(passwordList.length)+1,
			service: 'New Service',
			password: 'NewServicePassword-12345'
		});
		passwordListView.render();
		
	});
});