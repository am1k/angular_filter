var angular = require('angular');
var app = angular.module('app', []);

require('./controllers/mainCtrl')(app);
require('./directives/filter-select/filter-select.directive')(app);