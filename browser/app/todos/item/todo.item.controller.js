// define a `TodoItemCtrl` controller.
// It should have a scope method `toggleComplete` that switches
// the `complete` property of `$scope.theTodo`, and a
// `removeTodo` scope method that deletes the current todo
// from the backend and then goes back to the `todos` state.

app.controller('TodoItemCtrl', function($scope, Todo, $state){
	$scope.theTodo = {};
	$scope.toggleComplete = function(){
		if ($scope.theTodo.complete === false)
		return	 $scope.theTodo.complete = true;
		$scope.theTodo.complete = false;	
	}
	$scope.removeTodo = function(){
		Todo.destroy($scope.theTodo.id)
		.then(function(){
			$state.go('todos');
		}) 
	}
})
