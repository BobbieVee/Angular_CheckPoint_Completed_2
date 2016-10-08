app.controller('TodoEditCtrl', function($scope, todo, Todo, $state){
	$scope.todo = todo;
	$scope.keepChanges = function(){
		Todo.update(todo.id, todo)
		.then(function(result){
			$state.go('todos.detail', result);
		})
	}
})
