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
  .when('/contact', {
    templateUrl: 'views/contact.html',
    controller: 'ContactController',
    controllerAs: 'cc'
  })
  .when('/admin-calendar', {
    templateUrl: 'views/admin-calendar.html',
    controller: 'AdminCalendarController',
    controllerAs: 'acc'
  })
  .when('/admin-tasks', {
    templateUrl: 'views/admin-tasks.html',
    controller: 'AdminTasksController',
    controllerAs: 'at'
  })
  .when('/admin-pricing', {
    templateUrl: 'views/admin-pricing.html',
    controller: 'AdminPricingController',
    controllerAs: 'ap'
  })
  .otherwise({
    redirectTo: 'home'
  })
}]); // end
