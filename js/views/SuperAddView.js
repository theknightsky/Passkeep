define(['backbone','handlebars','PasswordList','PasswordListView','allPasswords'], function(Backbone, Handlebars, PasswordList, PasswordListView, allPasswords){
	var SuperAddView = Backbone.View.extend({

		template: Handlebars.default.compile($('#password-create-template').html()),

		initialize: function(){
			this.render();
		},

		events: {
			'click #createButton': 'createPassword',
			'click #backButton': 'renderSearch',
			'keyup': 'keyUp'
		},

		createPassword: function(e){

			var serviceTitle = this.$el.find('#inputTitle').val(),
				password = this.$el.find('#inputPassword').val();

			if (serviceTitle == '' || password == '') {

				this.renderSearch();
				this.superAlert('No new password was created');

			} else {

				allPasswords.add({
				id: allPasswords.length+2,
				service: serviceTitle,
				password: password
				});

				var passwordListView = new PasswordListView({collection: allPasswords});

				this.renderSearch();

				this.superAlert('+ New password created: '+serviceTitle);
				
			}

		},

		superAlert: function(message){

			$('#superAlert').html(message).css('visibility', 'visible');

			setTimeout(function(){

				$('#superAlert').css('visibility', 'hidden').html('');

			}, 4000);

		},

		keyUp: function(e){

			e.preventDefault();

			if (e.keyCode === 13) {

				this.createPassword();

			}

		},

		renderSearch: function(){

			require(['SuperSearchView'], function(SuperSearchView){
			var superSearchView = new SuperSearchView({collection: allPasswords});
			$('#superbar').removeClass().addClass('small').html(superSearchView.el);
			});
		},

		render: function(){

			this.$el.html(this.template(this.collection.toJSON()));

			this.$el.find('#inputTitle').focus();
			
		}
	});

	return SuperAddView;

});