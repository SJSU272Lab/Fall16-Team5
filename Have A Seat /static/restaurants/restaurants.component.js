angular.module('restaurants')
.component('restaurants', {
	templateUrl: 'static/restaurants/restaurants.template.html',
	controller: [
		'$http',
		'$scope',
		'$location',
		'$routeParams',
        "$rootScope",
        '$anchorScroll',
		function ($http, $scope, $location,$routeParams, $rootScope, $anchorScroll) {
                var restaurantsCtrl = this;
                restaurantsCtrl.search = $routeParams.search;


            $http({
                    method: 'GET',
                    url: '/loggedinUser',
                }).then(function (res) {
                    console.log(res);
                    if(res.data.error){
                    $location.path('/');
                    }
                });


                $scope.logoutZZ = function(){
                console.log('someeee');
                 $http({
                    method: 'GET',
                    url: '/logout',
                }).then(function (res) {
                    console.log(res);
                    console.log('Loggin out from admin');
                    console.log('root',$rootScope);
                    $rootScope.loginDetails = null;
                    $rootScope.hideAdminHeader = true;
                    $rootScope.hideHeader = true;
                    $rootScope.hideWelcomeHeader = true;
                    $rootScope.loggedIn = false;
                    $location.path('/');
                    });
                    }

         if(($rootScope.loginDetails !== undefined) && ($rootScope.loginDetails !== null) ){
                $scope.hideLoginSignup = true;
                $scope.showLogout= false;

            }



        $scope.logout = function(){
			    console.log('Loggin out from admin');
			    console.log('root',$rootScope);
			    $rootScope.loginDetails = null;
			    $rootScope.hideAdminHeader = true;
			    $rootScope.hideHeader = true;
			    $rootScope.hideWelcomeHeader = true;
			    $rootScope.loggedIn = false;
                $location.path('/');
			}


            this.searchRestaurants = function() {
                $scope.search;
                var restaurantsSearchUrl ='/restaurants/' + $scope.search;
                $location.path(restaurantsSearchUrl);
            }
                $http({
                    method: 'POST',
                    url: '/restaurants',
                    data:{
                        search: restaurantsCtrl.search
                    }
                }).then(function (res) {
                    restaurantsCtrl.restaurants = res.data;
                });

                this.view = function(restaurant){
                console.log(restaurant);
                var seatsUrl = '/seats/'+restaurant.id;
                $location.path(seatsUrl);
            }
		}]
});