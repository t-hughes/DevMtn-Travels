angular.module('devmtnTravel').controller('packagesCtrl', function($scope, mainSrv){
  $scope.locationData = mainSrv.travelInfo;
});
