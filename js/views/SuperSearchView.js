define(['backbone', 'handlebars','PasswordList','PasswordListView','allPasswords'], function(Backbone,Handlebars,PasswordList,PasswordListView,allPasswords){

	var SuperSearchView = Backbone.View.extend({

		template: Handlebars.default.compile($('#password-search-template').html()),

		initialize: function(){
			this.render();
		},

		events: {
			'click #searchButton': 'loadResult',
			'click #startCreate': 'renderCreate',
			'keyup': 'keyUp'
		},

		searchResult: [],

		findMatch: function(model){

			var searchValue = this.$el.find('#inputCreate').val();

				if (searchValue.length >=2) {
				
					if (model.get('service').toLowerCase().replace(/\s+/g, '').indexOf(searchValue.toLowerCase().replace(/\s+/g, '')) >= 0) {
						this.searchResult.push(model);
					}

				} else {

					if (model.get('service').charAt(0).toLowerCase() == searchValue.charAt(0).toLowerCase()) {

						this.searchResult.push(model);
					}

				}
		},

		searchPassword: function(e){
			e.preventDefault();

			var searchValue = this.$el.find('#inputCreate').val();
			this.searchResult = [];

			this.collection.each(function(model){
				
				this.findMatch(model);

			}, this);

			return this.searchResult;

		},

		loadResult: function(e){
			this.searchPassword(e);

			if (this.searchResult.length == 0) {

				var message = "No matching passwords found";
				this.superAlert(message);
	
			} else {

				var searchResultList = new PasswordList(this.searchResult);

				searchResultList.comparator = function(password){
					return password.get("service")
				}

				searchResultList.sort();

				var searchResultView = new PasswordListView({collection: searchResultList});
				searchResultView.render();
			}

		},

		superAlert: function(message){

			$('#superAlert').html(message).css('visibility', 'visible');

			setTimeout(function(){

				$('#superAlert').css('visibility', 'hidden').html('');

			}, 4000);

		},

		keyUp: function(e){

			var searchButton = this.$el.find('#searchButton');
			var searchValue = this.$el.find('#inputCreate').val();

			e.preventDefault();
			searchButton.addClass('green');

			if (e.keyCode === 13) {

				this.loadResult(e);

			}

			if (searchValue == '') {

				var passwordListView = new PasswordListView({collection: allPasswords});
				searchButton.removeClass('green');

			}

		},

		render: function(){

			this.$el.html(this.template(this.collection.toJSON()));

		},

		renderCreate: function(){

			require(['SuperAddView'], function(SuperAddView){
			var superAddView = new SuperAddView({collection: allPasswords});
			$('#superbar').removeClass().addClass('big').html(superAddView.el);
			});


		}
	});

	return SuperSearchView;

});