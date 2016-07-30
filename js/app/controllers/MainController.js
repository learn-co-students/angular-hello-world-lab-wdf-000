function MainController($scope){
  $scope.name = "Bill"
  $scope.email = "a@b.c"
  $scope.phone = "123-456-7890"
}

angular
  .module('app')
  .controller('MainController',MainController)
