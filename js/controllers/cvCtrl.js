'use strict';
app.controller('cvCtrl', ['$scope', '$location', '$http', function ($scope, $location, $http) {

    $scope.selectedIndex = 0;
    if($location.url() === "/motivation"){
        $scope.selectedIndex+=1;
    }
    $scope.$watch('selectedIndex', function(current) {
        switch (current) {
            case 0:
                $location.url("/");
                break;
            case 1:
                $location.url("/motivation");
                break;
        }
    });

    $http.get('json/infos.json')
        .then(function(res){
            $scope.datas = res.data;
        });

}]);