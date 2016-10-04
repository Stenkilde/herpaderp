(function () {
    'use strict';

    angular
        .module('appName')
        .controller('Index', Index);

    /* @ngInject */
    function Index($interval) {
        /*jshint validthis: true */
        var vm 		= this;
        vm.totalTime = 0;
        vm.seconds = '00';
        vm.minutes = '00';
        vm.timer = null;

        vm.startInterval = startInterval;
        vm.stopInterval = stopInterval;
        vm.whatDay = whatDay;

        activate();

        function activate() {
        }

        function whatDay(day) {
            console.log(day);
        }

        function startInterval() {
            vm.timer = $interval(function() {
                ++vm.totalTime;
                vm.seconds = pad(vm.totalTime%60);
                vm.minutes = pad(parseInt(vm.totalTime/60));
                console.log(vm.totalTime);
            }, 1000);
        }

        function stopInterval() {
            $interval.cancel(vm.timer);
        }

        function pad(val) {
            var valString = val + "";
            if(valString.length < 2) {
                return "0" + valString;
            }
            else {
                return valString;
            }
        }

    }
})();
