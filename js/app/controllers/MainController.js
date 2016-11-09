function MainController($scope) {
  $scope.name = "Carrot";
  $scope.email = "email@email.com";
  $scope.phone = "000-000-0000";
}

angular
  .module('app')
  .controller('MainController', MainController);