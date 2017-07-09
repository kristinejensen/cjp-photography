var app = angular.module('PhotoApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/home', {
    templateUrl: 'views/home.html',
    controller: 'HomeController',
    controllerAs: 'hc'
  })
  .when('/portfolio', {
    templateUrl: 'views/portfolio.html',
    controller: 'PortfolioController',
    controllerAs: 'pc'
  })
  .when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutController',
    controllerAs: 'ac'
  })
  .otherwise({
    redirectTo: 'home'
  })
}]); // end
