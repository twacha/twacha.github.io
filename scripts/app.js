'use strict';

angular.module('twachaApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }).
      when('/doctors', {
          templateUrl: 'views/doctors.html',
          controller: 'DoctorsCtrl'
      }).
      when('/services', {
            templateUrl: 'views/services.html',
            controller: 'ServicesCtrl'
      }).
      when('/gallery', {
            templateUrl: 'views/gallery.html',
            controller: 'GalleryCtrl'
      }).
      when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactCtrl'
      }).
      when('/general', {
            templateUrl: 'views/general.html',
            controller: 'GeneralCtrl'
      }).
      when('/cosmetic', {
            templateUrl: 'views/cosmetic.html',
            controller: 'CosmeticCtrl'
      }).
      when('/pediatric', {
            templateUrl: 'views/pediatric.html',
            controller: 'PediatricCtrl'
      }).
      when('/trichology', {
            templateUrl: 'views/trichology.html',
            controller: 'TrichologyCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  });
