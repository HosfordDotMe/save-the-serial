const angular = require('angular');

const NavigationComponent = require('./components/navigation');


angular.module('save-the-serial', [])
    .component('navigation', NavigationComponent);

