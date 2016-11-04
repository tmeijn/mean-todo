'use strict';

function TodoDirective() {
  return {
    templateUrl: 'templates/todo.html',
    replace: true,
    controller: 'todoCtrl'
  }
};

module.exports = TodoDirective;