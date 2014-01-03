require.config({
	baseUrl: 'js',
	paths: {
		'jquery': 'libs/jquery',
		'underscore': 'libs/underscore',
		'backbone': 'libs/backbone',
		'handlebars': 'libs/handlebars',
		'PasswordModel': 'models/PasswordModel',
		'PasswordList': 'models/PasswordList',
		'PasswordView': 'views/PasswordView',
		'PasswordListView': 'views/PasswordListView',
		'EditView': 'views/EditView'
	},
	shim: {
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		'underscore': {
			deps: ['jquery'],
			exports: '_'
		}
	}
});