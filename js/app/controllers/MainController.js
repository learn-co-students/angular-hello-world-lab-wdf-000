angular
	.module('app')
	.controller('MainController', MainController);

function MainController($scope) {
		$scope.wizard = {
			name: "antoin",
			powers: 'all of them'
		};
}
