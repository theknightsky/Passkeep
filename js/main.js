define(['config'], function(){
	require(['PasswordModel', 'PasswordView'], function(PasswordModel, PasswordView){
		var passwordModel = new PasswordModel({
			service: 'Phone Password',
			password: '12345'
		});

		var passwordView = new PasswordView({model: passwordModel});
		$('.passwordContainer').html(passwordView.el);
		
	});
});