app.controller('TodoListCtrl', function($scope, todos, Todo, $state){
	$scope.todos =  todos;
	$scope.filterByCompleted = '';
	
	$scope.setCategory = function(str){
		var map = {
			all: '',
			completed: true,
			active: false
		}
		$scope.filterByCompleted = map[str];
		if(str === 'all'){
			var map2 = {
				all: true,
				completed: false,
				active: false
			};
		} else if ( str === 'completed'){
			var map2 = {
				all: false,
				completed: true,
				active: false
			};
		};

		$scope.isActiveCategory = function(str2){
			return map2[str2];
		};
		
		
	}

	$scope.addTodo = function (info) {
		Todo.add(info)
		.then(function(result){
			$scope.todos = {};
			$state.go('todos.edit', result);
		})
		.catch(function(err){
			console.log(err)
		})
	}

	

	


})
