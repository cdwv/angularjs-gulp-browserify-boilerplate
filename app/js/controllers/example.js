'use strict';

function ExampleCtrl($log, $interval, $state) {
  'ngInject';


  // ViewModel
  const vm = this;

  vm.title = 'Example leaky app.';
  // vm.title = 'AngularJS, Gulp, and Browserify! Written with keyboards and love!';
  // vm.number = 1234;

  var locations = [
    'Home',
    'Home.Dragon',
    'Home.Minion',
    'Home.Download'
  ];

  var cycleInterval;
  var cycleIndex = 0;

  vm.freq = 200;

  vm.toggleCycle = (forceValue) => {
    vm.cycle = forceValue !== undefined ? forceValue : !vm.cycle;
    
    if(!vm.cycle && cycleInterval) {
        $interval.cancel(cycleInterval);
        return;
    }

    cycleInterval = $interval(() => {
        cycleIndex++;
        if(!locations[cycleIndex]) {
            cycleIndex = 0;
        }

        $log.debug('Cycle', locations[cycleIndex]);
        $state.go(locations[cycleIndex]);
    }, vm.freq);
  }

  // vm.toggleCycle(false);

}

export default {
  name: 'ExampleCtrl',
  fn: ExampleCtrl
};
