'use strict';

function MinionCtrl($log) {
  'ngInject';

  const vm = this;
  vm.title = 'Minion';

    function outerFunction(){
        var obj = angular.element('.minion').first();
        window.minion = obj;

        obj.onclick=function innerFunction(){
            $log.debug('Leak ;)');
        };

        obj[Math.round(Math.random() * 1000)] = new Array(10000).join(new Array(5000).join("XXXXX"));
        // This is used to make the leak significant
    };

  vm.leakMemory = function leakMemory() {
    outerFunction();
  }
}

export default {
  name: 'MinionCtrl',
  fn: MinionCtrl
};
