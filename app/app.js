'use strict';

angular.module('myApp', [
    'angular-kaarousel'
  ])
  .controller('MainCtrl', function ($scope, $interval) {
    $scope.data = [
      {
        'key': 'angular',
        'title': 'AngularJS',
        'url': 'https://angularjs.org/',
        'description': 'HTML enhanced for web apps!',
        'logo': 'angular.png'
      },
      {
        'key': 'browsersync',
        'title': 'BrowserSync',
        'url': 'http://browsersync.io/',
        'description': 'Time-saving synchronised browser testing.',
        'logo': 'browsersync.png'
      },
      {
        'key': 'gulp',
        'title': 'GulpJS',
        'url': 'http://gulpjs.com/',
        'description': 'The streaming build system.',
        'logo': 'gulp.png'
      },
      {
        'key': 'jasmine',
        'title': 'Jasmine',
        'url': 'http://jasmine.github.io/',
        'description': 'Behavior-Driven JavaScript.',
        'logo': 'jasmine.png'
      },
      {
        'key': 'karma',
        'title': 'Karma',
        'url': 'http://karma-runner.github.io/',
        'description': 'Spectacular Test Runner for JavaScript.',
        'logo': 'karma.png'
      },
      {
        'key': 'protractor',
        'title': 'Protractor',
        'url': 'https://github.com/angular/protractor',
        'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
        'logo': 'protractor.png'
      },
      {
        'key': 'jquery',
        'title': 'jQuery',
        'url': 'http://jquery.com/',
        'description': 'jQuery is a fast, small, and feature-rich JavaScript library.',
        'logo': 'jquery.jpg'
      },
      {
        'key': 'bootstrap',
        'title': 'Bootstrap',
        'url': 'http://getbootstrap.com/',
        'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
        'logo': 'bootstrap.png'
      },
      {
        'key': 'less',
        'title': 'Less',
        'url': 'http://lesscss.org/',
        'description': 'Less extends the CSS language, adding features that allow variables, mixins, functions and many other techniques.',
        'logo': 'less.png'
      }
    ];


    $interval(function () {
      if ( !$scope.syncing ) {
        $scope.sync = null;
        return;  
      }
      $scope.sync++;
      $scope.sync = $scope.sync > $scope.data.length - 1 ? 0 : $scope.sync; 
    }, 3000);

    $scope.displayed = 3;
    $scope.perSlide = 1;
    $scope.autoplay = true;
    $scope.pauseOnHover = true;

    $scope.shouldCenter = false;
    $scope.stopAfterAction = false;
    $scope.timeInterval = 1000;

    $scope.hideNav = false;
    $scope.hidePager = false;
    $scope.navOnHover = false;
    $scope.pagerOnHover = false;

    $scope.swipable = true;
    $scope.syncing = false;
    $scope.rtl = false;
    $scope.sync = $scope.syncing ? 0 : null;

    $scope.updateRate = 300;

    angular.forEach($scope.data, function(awesomeThing) {
      awesomeThing.rank = Math.random();
    });
  });