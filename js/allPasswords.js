define(['PasswordList'], function(PasswordListView){
	var passwordList = new PasswordListView([
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
		},
		{
			id: 04,
			service: 'Amazon Password',
			password: '12345'
		},
		{
			id: 05,
			service: 'Google Password',
			password: 'google-guy123'
		}
		]);

		passwordList.comparator = function(password){
			return password.get("service")
		}

		return passwordList;

});