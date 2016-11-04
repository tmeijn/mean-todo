'use strict';
  
mainController.$inject = ['dataService'];
function mainController(dataService) {
  dataService.getTodos(function(response){
    var todos = response.data.todos;  
    $scope.todos =  todos;
    });
  
  $scope.addTodo = function() {
    $scope.todos.unshift({name: "This is a new todo.",
                      completed: false});
  };
}

module.exports = mainController;