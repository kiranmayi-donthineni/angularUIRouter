/**
 * Created by kavuri on 2/5/2017.
 */
var app = angular.module('myApp',['ui.router']);
app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home',{
            url:'/home',
            templateUrl:'partials/home.html'
        })
        .state('about',{
            url:'/about',
            templateUrl:'partials/about.html'
        })
        .state('about.company',{
            url:'/company',
            templateUrl:'partials/about.company.html',
            controller:'companyCtrl'
        })
        .state('about.ceo',{
            url:'/ceo',
            templateUrl:'partials/about.ceo.html',
            controller:'ceoCtrl'
        })
    });
app.service('companyService',function($http){
    console.log("in companyService");
    this.getCompany = function(){
        console.log('in getCompany');
        return $http.get('/company');
    }
})

app.controller('companyCtrl',['$scope','companyService',function($scope,companyService){
    console.log('in controller');
    companyService.getCompany().then(function(response){
        $scope.company = response.data;
        console.log("$scope.company  "+$scope.company);
    })
}])

    app.service('ceoService',function($http){
        console.log("in ceoService");
        this.getCeo = function(){
            console.log("in getCeo");
            return $http.get('/ceo');
        }
    })

    app.controller('ceoCtrl',['$scope','ceoService',function($scope,ceoService){
        console.log('in ceoController');
        ceoService.getCeo().then(function(response){
            $scope.ceo = response.data;
            console.log("$scope.ceo "+$scope.ceo);
        })


}]);

