
app.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('todos.edit', {
		url: '/:id/edit',
		templateUrl: '/app/todos/edit/todo.edit.html',
		resolve: {
          todo: function(Todo, $stateParams){
            return Todo.getOne($stateParams.id);
          }
        },
        controller: 'todo.edit.controller.js'
	})
	$urlRouterProvider.otherwise('/');
});