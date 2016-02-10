var filterSelect = function(){
    return {
        restrict: 'E',
        scope: {
            options: '=options',
            change: '=change'
        },
        templateUrl: 'directives/filter-select/filter-select.template.html'
    }
};

module.exports = function(app){
    app.directive('filterSelect', filterSelect);
};