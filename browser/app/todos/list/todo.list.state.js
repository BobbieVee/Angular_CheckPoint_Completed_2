app.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('todos', {
		url: '/todos',
		templateUrl: '/app/todos/list/todo.list.html',
		resolve: {
          todos: function(Todo){
            return Todo.getAll();
          }
        },
        controller: 'todo.list.controller.js'
	})
	$urlRouterProvider.otherwise('/');
});