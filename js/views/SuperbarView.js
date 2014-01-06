define(['backbone', 'handlebars','PasswordList','PasswordListView','allPasswords'], function(Backbone, Handlebars,PasswordList, PasswordListView, allPasswords){

	var superBarView = Backbone.View.extend({
		el: '#superbar',
		
		template: Handlebars.default.compile($('#password-create-template').html()),

		initialize: function(){
			this.render();
		},

		events: {
			'click #searchPassword': 'loadResult',
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
				return message;
			}else{
				var searchResultList = new PasswordList(this.searchResult);
				searchResultList.comparator = function(password){
					return password.get("service")
				}

				var searchResultView = new PasswordListView({collection: searchResultList});
				searchResultView.render();
			}

		},

		keyUp: function(e){
			e.preventDefault();
			var searchValue = this.$el.find('#inputCreate').val();

			if(e.keyCode === 13){
				this.loadResult(e);
			}else if(searchValue == ''){
				var passwordListView = new PasswordListView({collection: allPasswords});
			}

		},

		render: function(){
			this.$el.html(this.template(this.collection.toJSON()));
		}
	});

	return superBarView;

});