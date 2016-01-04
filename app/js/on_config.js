'use strict';

function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('Home', {
    url: '/',
    controller: 'ExampleCtrl as home',
    templateUrl: 'home.html',
    title: 'Home'
  })
  .state('Home.Dragon', {
    url: 'dragon/',
    controller: 'DragonCtrl as dragon',
    templateUrl: 'dragon.html',
    title: 'Dragon'
  })
  .state('Home.Minion', {
    url: 'minion/',
    controller: 'MinionCtrl as minion',
    templateUrl: 'minion.html',
    title: 'Minion'
  })
  .state('Home.Download', {
    url: 'download/',
    controller: 'DownloadCtrl as download',
    templateUrl: 'download.html',
    title: 'Download'
  });

  $urlRouterProvider.otherwise('/');

}

export default OnConfig;