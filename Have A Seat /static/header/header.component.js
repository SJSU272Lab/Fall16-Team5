angular.module('header')
.component('header', {
	templateUrl: 'static/header/header.template.html',
	controller: [
		'$http',
		'$scope',
		'$location',
        '$rootScope',
        '$anchorScroll',
		function ($http, $scope, $location, $rootScope, $anchorScroll) {
			var headerCtrl = this;

			this.searchRestaurants = function() {
                $scope.search;
                var restaurantsSearchUrl ='/restaurants/' + $scope.search;
                $location.path(restaurantsSearchUrl);
            }
		}]
});