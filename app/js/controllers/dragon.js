'use strict';

function DragonCtrl($scope, $interval, $log) {
  'ngInject';

  function expensiveSleep(ms) {
    var start = new Date().getTime(), expire = start + ms;
    while (new Date().getTime() < expire) { 
        var j = Math.sqrt(Math.random());
    }
    return;
  }

  const vm = this;
  vm.title = 'Dragon';

  $scope.dragon = angular.element('#DRAGON');
  
  $scope.$on('$destroy', () => {
    $log.debug('DragonCtrl poof!');
  });

  $interval(() => {
    if(Math.random() < 0.05) {
        $log.debug('Dragon poof!', angular.element('#DRAGON div').last().remove());
        expensiveSleep(200);
    }
  }, 1);
}

export default {
  name: 'DragonCtrl',
  fn: DragonCtrl
};
