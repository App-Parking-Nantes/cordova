//Déclaration de notre application AngularJS avec les modules nécessaires
var app = angular.module('ParkingNantes', ['ngRoute','ngMap','ngSanitize']);

/* Configuration des routes*/
app.config(['$routeProvider','$httpProvider',function ($routeProvider,$httpProvider) {
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    
    $routeProvider.when('/maps', { 
        templateUrl: 'parking/view/viewMaps.html',
        controller:'MapsController'  
    }).when('/list',{
        templateUrl :'parking/view/viewList.html',
        controller :'MapsController'
    })
    .when('/single/:idParking',{
        templateUrl : 'parking/view/viewSingle.html',
        controller : 'MapsController'
    })
    .when('/a-propos',{
        templateUrl : 'parking/view/viewInfos.html',
        controller : 'MapsController'
    })
    .otherwise({redirectTo : '/maps'});   
    
}]);



//JS pour le menu
(function($) {

    $('#header__icon').click(function(e) {
        e.preventDefault();
        $('body').toggleClass('with--sidebar');
    });

    $('#site-cache').click(function(e) {
        $('body').removeClass('with--sidebar');
    });
    
    $('.menu').click(function(e) {
        $('body').removeClass('with--sidebar');
    });

})(jQuery);
