// define a `todos.detail` state which resolves a single `todo`
// based on the id in the url used to reach the state.
// Note: it isn't tested, but you should also wire up the
// associated controller and templateUrl for a functioning app.
app.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('todos.detail', {
		url: '/:id',
		templateUrl: '/app/todos/detail/todo.detail.html',
		resolve: {
			todo: function(Todo, $stateParams){
				return Todo.getOne($stateParams.id)
			}
		},
		controller: 'todo.detail.controller.js'
	})
	
})