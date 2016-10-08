
app.factory('Todo',function($http){
	var _todos = [];
	return{
		getOne: function(id){
			return $http.get('/api/todos/' + id)
			.then(function(results){
				_todos = results.data;
				return _todos;
			})
		}, 

		getAll: function(){
			return $http.get('/api/todos/')
			.then(function(results){
				angular.copy(results.data, _todos);
				return _todos;
			});

		},

		destroy: function(id){
			return $http.delete('/api/todos/' + id)
			.then(function(){
				_todos.splice(_todos.indexOf(id), 1)
			})
		},

		add: function(info){
			return $http.post('/api/todos', info )
			.then(function(result){
				_todos = result.data;
				return _todos;
				
			})
		},

		update: function(id, obj){
			return $http.put('/api/todos/' + id, obj)
			.then(function(result){
				return _todos = result.data;
			})	
		}

	}
})