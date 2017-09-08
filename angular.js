angular.module('HomePage', ['ngMaterial'])

.controller('AppCtrl', function($scope) {
  $scope.imagePath = 'img/washedout.png';
  $scope.header = "Hi, i'm Dustin Downing!";
  $scope.subHeader = "Full Stack Web Developer";
  $scope.discription = "Freelance software developer in the Austin, TX area specializing in web applications for custom business solutions."

})
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('indigo')
    .accentPalette('orange');
  $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
  $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
  $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
  $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
});
