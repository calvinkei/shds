var app = angular.module("shds", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "home.html"
  })
  .when("/about", {
    templateUrl : "about.html"
  })
  // .when("/news", {
  //   templateUrl : "news.html"
  // })
  .when("/curriculum", {
    templateUrl : "curriculum.html"
  })
  .when("/schedule", {
    templateUrl : "schedule.html"
  })
  .when("/photos", {
    templateUrl : "photos.html"
  })
  .when("/photos/:event", {
    templateUrl : "eventphotos.html"
  })
  .when("/contact", {
    templateUrl : "contact.html"
  });
});
app.controller('appCtrl',function($scope, $routeParams, $window){
  $scope.$on('$routeChangeSuccess', function(event, next, current){
    $scope.route=next.loadedTemplateUrl.replace('.html', '');
    $scope.menu={active:false};
    $scope.photo.show=$routeParams.event;
    $window.scrollTo(0, 0);
  });
  $scope.menu={active:false};
  $scope.isMobile=window.innerWidth<900;
  $scope.photo={show:'',array:{
    '3dayWorkshop':[1,2,3,4,5,6,7,8,9,10,11,12,13],
    'wdc':[1,2,3,4,5,6,7,8,9,10],
    'school':[1,2],
    'openComp':[1,2,3,4,5,6],
    'kwanAi':[1,2,3,4,5,6,7],
    'yunnan':[1,2,3],
    'hoiMeiYuiSi':[1,2,3,4,5],
    'chaseDragon':[1,2,3,4],
    'hkbpe':[1,2,3],
    'qianyiancup':[],
    'youthSports':[1,2,3,4,5],
    'gz':[1,2,3,4],
    'pa':[1,2,3],
    'sh':[1,2,3],
    'myc':[1,2,3,4],
    'hkwdsf20':[],
    'hkwdsf':[1,2,3,4,5,6,7],
  }};
  for (i=1;i<=60;i++){$scope.photo.array['qianyiancup'].push(i)}
  for (i=1;i<=59;i++){$scope.photo.array['hkwdsf20'].push(i)}
  $scope.show={img:null};
})
