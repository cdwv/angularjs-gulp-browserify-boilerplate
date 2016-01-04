'use strict';

function DownloadCtrl($scope, $timeout, $q, $log) {
  'ngInject';

  const vm = this;
  vm.foo = 'Bar';

  $scope.data = 'Request sent, waiting for data';

  var deferred = $q.defer();

  deferred.promise.then((result) => {
    $log.debug('Got result', result);
    $scope.data = result;
  });

  $timeout(() => {
    var 
        i,
        bigArray = [];

    for(i = 0; i < 10000; i++) {
        bigArray.push(Math.round(Math.random() * 1000));
    }

    deferred.resolve(bigArray);
  }, 1500);

  $scope.$on('$destroy', () => {
    $log.debug('DownloadCtrl poof!');
  });

}

export default {
  name: 'DownloadCtrl',
  fn: DownloadCtrl
};
