angular.module('home.controller', [])
  .controller('homeController', ['$scope','$ionicScrollDelegate' ,function($scope,$ionicScrollDelegate,shouldAnimate) {
    var items = [{
      title: '今日特卖',
      tishi: '9点更新',
      img: '../img/list.jpg'
    }, {
      gaoliang: '29元起',
      title: '今日特卖',
      img: '../img/list1.jpg',
      tishi: '今日上新'
    }, {
      title: '今日特卖',
      tishi: '9点更新',
      img: '../img/list.jpg'
    }, {
      gaoliang: '29元起',
      title: '今日特卖',
      img: '../img/list1.jpg',
      tishi: '今日上新'
    }, {
      title: '今日特卖',
      tishi: '9点更新',
      img: '../img/list.jpg'
    }, {
      gaoliang: '29元起',
      title: '今日特卖',
      img: '../img/list1.jpg',
      tishi: '今日上新'
    }, {
      title: '今日特卖',
      tishi: '9点更新',
      img: '../img/list.jpg'
    }, {
      gaoliang: '29元起',
      title: '今日特卖',
      img: '../img/list1.jpg',
      tishi: '今日上新'
    }]
    var cc = [{
      img: '../img/home1.jpg'
    }, {
      img: '../img/home2.jpg'
    }, {
      img: '../img/home1.jpg'
    }, {
      img: '../img/home2.jpg'
    }]
    $scope.sss =function(){
      // console.log($ionicScrollDelegate.getScrollPosition().top);
      if($ionicScrollDelegate.getScrollPosition().top>100){
        $('.fix').show();
      }else {
        $('.fix').hide();
      }
    }

    $scope.scrollTop = function() {
      if($ionicScrollDelegate.getScrollPosition().top>100){
        $ionicScrollDelegate.scrollTo(0, 0,[shouldAnimate]);//第三个参数也可以是true
      }
  };
    $scope.items = items;
    $scope.cc = cc;
  }])
