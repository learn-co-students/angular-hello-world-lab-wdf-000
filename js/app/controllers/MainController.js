function MainController($controller) {
  $controller.name = 'Margaret';
}

angular
  .module('app')
  .controller('MainController', MainController);