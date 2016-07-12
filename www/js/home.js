angular.module('home.controller', [])
  .controller('homeController', ['$scope','$ionicScrollDelegate','$http','$timeout' ,'$ionicSlideBoxDelegate',function($scope,$ionicScrollDelegate,$http,$timeout,$ionicSlideBoxDelegate,shouldAnimate) {
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
    var xx='../img/home4.jpg';
    $scope.items = items;
    $scope.cc = cc;
    $scope.xx = xx;

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

    $scope.doRefresh=function(){
      $http.get('./mock/home1.json')
        .success(function(res){
          $scope.cc=res;
          // $scope.cc=$scope.cc.concat(res);
          // $scope.cc=$scope.cc.concat(res.img);
        })
        $http.get('./mock/pic.json')
          .success(function(res){
            $scope.xx=res.img;
            // console.log(res.img);
          })

    //     .finally(function() {
    //    // 停止广播ion-refresher
    //    $scope.$broadcast('scroll.refreshComplete');
    //  });
    $timeout(function () {
      $scope.$broadcast('scroll.refreshComplete');
      $ionicSlideBoxDelegate.$getByHandle('zz').update();
    },20)
    }


    $scope.loadMore=function () {
      $timeout(function () {
        $http.get('./mock/home.json')
        .success(function (res) {
          $scope.items=$scope.items.concat(res);
          $scope.$broadcast('scroll.infiniteScrollComplete');
        })
        $scope.$on('stateChangeSuccess', function() {
    $scope.loadMore();
  });
      },3000)

    }

  }])
