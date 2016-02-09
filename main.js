var app = angular.module('app', []);


app.controller('mainCtrl', function($scope, $http){
    var data;
    $scope.filterName = '';
    $scope.filterValue = '';
    $scope.values = [];
    $scope.selectItem = null;
    $scope.keys = [];
    $scope.update = function(val){
        // вырезание одинаковых значений
        $scope.filterName = val;
        $scope.values = data.reduce(function(res, item){
            if(res.indexOf(item[val]) < 0){
                res.push(item[val]);
            }
            return res;
        } ,[]);
    };

    $scope.select = function(val){
        $scope.filterValue = val
    };

    $http.get('data.json').success(function(res, status, headers, config) {
        data = angular.fromJson(res);
        var keys = [],
            sortKeys = [];
        for(var i = 0; i<data.length; i++){
            keys = keys.concat(Object.keys(data[i]));
        }
        keys.sort();

        for(var j = 0; j < keys.length; j++){
            keys[j] != keys[j-1] && keys[j+1] && sortKeys.push(keys[j])
        }

        $scope.keys = sortKeys;

        $scope.data = data;
    });

    $scope.filterList = function(item){
        return !$scope.filterValue || item[$scope.filterName] == $scope.filterValue;
    };
});



app.directive('filterSelect', function(){
    return {
        restrict: 'E',
        scope: {
            options: '=options',
            change: '=change'
        },
        templateUrl: 'template.html'
    }
});

