define(['backbone', 'handlebars','PasswordList','PasswordListView','allPasswords'], function(Backbone, Handlebars,PasswordList, PasswordListView, allPasswords){

	var superBarView = Backbone.View.extend({
		el: '#superbar',

		className: 'small',

		searchTemplate: Handlebars.default.compile($('#password-search-template').html()),
		createTemplate: Handlebars.default.compile($('#password-create-template').html()),

		initialize: function(){
			this.renderSearch();
		},

		events: {
			'click #searchButton': 'loadResult',
			'click #startCreate': 'renderCreate',
			'click #createButton': 'createPassword',
			'keyup': 'keyUp'
		},

		searchResult: [],

		findMatch: function(model){

			var searchValue = this.$el.find('#inputCreate').val();

				if(searchValue.length >=2){
				
					if(model.get('service').toLowerCase().toLowerCase().replace(/\s+/g, '').indexOf(searchValue.toLowerCase().replace(/\s+/g, '')) >= 0){
						this.searchResult.push(model);
					}

				}else{

					if(model.get('service').charAt(0).toLowerCase() == searchValue.charAt(0).toLowerCase()){
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

			if(this.searchResult.length == 0){
				var message = "No matching passwords found";
				console.log(message);
			}else{
				var searchResultList = new PasswordList(this.searchResult);
				searchResultList.comparator = function(password){
					return password.get("service")
				}

				var searchResultView = new PasswordListView({collection: searchResultList});
				searchResultView.render();
			}

		},

		createPassword: function(e){
			allPasswords.add({
			id: allPasswords.length+2,
			service: this.$el.find('#inputTitle').val(),
			password: this.$el.find('#inputPassword').val()
			});

			console.log(allPasswords);
			var passwordListView = new PasswordListView({collection: allPasswords});
			this.renderSearch();
		},

		keyUp: function(e){

			e.preventDefault();

			var searchButton = this.$el.find('#searchPassword');
			var searchValue = this.$el.find('#inputCreate').val();

			searchButton.addClass('green');


			if($(document.activeElement).attr('id') == 'inputCreate'){
				if(e.keyCode === 13){
					this.loadResult(e);
				}else if(searchValue == ''){
					var passwordListView = new PasswordListView({collection: allPasswords});
					searchButton.removeClass('green');
				}
			}else if($(document.activeElement).attr('id') == 'inputTitle' || $(document.activeElement).attr('id') == 'inputPassword'){
				if(e.keyCode === 13){
					this.createPassword();
				}
			}

		},

		renderSearch: function(){
			this.$el.removeClass().addClass('small');
			this.$el.html(this.searchTemplate(this.collection.toJSON()));
		},

		renderCreate: function(){
			this.$el.removeClass().addClass('big');
			this.$el.html(this.createTemplate(this.collection.toJSON()));
		}
	});

	return superBarView;

});