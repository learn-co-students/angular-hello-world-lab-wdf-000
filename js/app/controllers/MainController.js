function MainController ($scope) {
  $scope.name = "Name";
  $scope.email = "fake@email.com";
  $scope.phone = "111-111-1111";
}

angular
  .module('app')
  .controller('MainController', MainController)
