define(['config'], function(){
	require(['PasswordModel','PasswordList','PasswordView', 'PasswordListView', 'strength-minified'], function(PasswordModel,PasswordList,PasswordView,PasswordListView){

		var passwordList = new PasswordList([
		{
			id: 01,
			service: 'Gmail',
			password: 'mediumpass'
		},
		{
			id: 02,
			service: 'Zions Bank',
			password: 'thebestpassword-12345'
		},
		{
			id: 03,
			service: 'Apartment Rent Password',
			password: '1234'
		}
		]);

		passwordList.comparator = function(password){
			return password.get("service")
		}

		var passwordListView = new PasswordListView({collection: passwordList});

		passwordList.add({
			id: passwordList.at(passwordList.length)+1,
			service: 'New Service',
			password: 'strong-pass12345'
		});
		passwordListView.render();
		
	});
});