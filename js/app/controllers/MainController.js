function MainController($scope) {
  $scope.name = "asdasdasd";
  $scope.email = "asdas";
  $scope.phone = "this time it's not gibberish";
}

angular
  .module('app')
  .controller('MainController', MainController);
