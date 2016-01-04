'use strict';

function DragonCtrl($scope, $interval, $log) {
  'ngInject';

  const vm = this;
  vm.title = 'Dragon';

  $scope.dragon = angular.element('#DRAGON');
  
  $scope.$on('$destroy', () => {
    $log.debug('DragonCtrl poof!');
  });

  $interval(() => {
    if(Math.random() < 0.05) {
        $log.debug('Dragon poof!', angular.element('#DRAGON div').last().remove());
    }
  }, 10);
}

export default {
  name: 'DragonCtrl',
  fn: DragonCtrl
};
