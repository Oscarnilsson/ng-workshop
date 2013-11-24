'use strict';
angular.module('myApp.controllers', [])
.controller('TodoCtrl', ['$scope',

function($scope) {
			
			// $scope.todos = [
		 //    {text:'Build webapp', done:false},
		 //    {text:'Be awesome', done:true},
		 //    {text:'Eat cake', done:true}];
		 
		  $scope.addTodo = function() {
		  	console.log('addtodo');
		    $scope.todos.push({text:$scope.todoText, done:false});
		    $scope.todoText = '';
		  };
		 
		  $scope.remaining = function() {
		    var count = 0;
		    angular.forEach($scope.todos, function(todo) {
		      count += todo.done ? 0 : 1;
		    });
		    return count;
		  };
		 
		  $scope.archive = function() {
		    var oldTodos = $scope.todos;
		    $scope.todos = [];
		    angular.forEach(oldTodos, function(todo) {
		      if (!todo.done) $scope.todos.push(todo);
		    });
		  };

		  $scope.check = function(todo) {
		  	todo.done = !todo.done;
		  }

}])