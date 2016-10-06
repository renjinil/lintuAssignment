var routerApp = angular.module('routerapp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
	  
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('display', {
            url: '/:soft',

            views: {
    '': {
      templateUrl: 'display.html',
      controller: 'routerCtrl'

    },
            
    }       
      
    });
    });
routerApp.controller('routerCtrl',function($scope,$state,$stateParams,$http){
	var htm=$stateParams.soft;

	$http.get('json/data.json').success( function(response) {
    console.log(response[htm]);
    $scope.disp=response[htm];

   });

})