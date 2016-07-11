angular.module('list.controller', [])
  .controller('listController', ['$scope',function ($scope){
    var items = [
      {
        img:"./img/list_1.jpg",
        title:"女装",
        description:"女装9要潮我看"
      },
      {
        img:"./img/list_1.jpg",
        title:"裙子",
        description:"特价美裙潮我看"
      },
      {
        img:"./img/list_1.jpg",
        title:"必备套装",
        description:"今夏最IN潮我看"
      },
      {
        img:"./img/list_1.jpg",
        title:"女鞋",
        description:"至IN美鞋潮我看"
      },
      {
        img:"./img/list_1.jpg",
        title:"潮流男装",
        description:"森马9.9元起"
      },
      {
        img:"./img/list_1.jpg",
        title:"护肤",
        description:"晒了也白晒"
      }
    ];
     $scope.items = items;

     var items2 = [
       {
         src1:"./img/list1.jpg",
         p1:"【买1送1】御泥坊亮颜水润梦幻丝宠面...",
         b1:"￥297",
         span1:"月销2286件"
       },
       {
         src1:"./img/list2.jpg",
         p1:"【买3提送1提】采琪采迷你6包抽纸家居...",
         b1:"￥10",
         span1:"月销3557件"
       },
       {
         src1:"./img/list1.jpg",
         p1:"【买1送1】御泥坊亮颜水润梦幻丝宠面...",
         b1:"￥297",
         span1:"月销2286件"
       },
       {
         src1:"./img/list2.jpg",
         p1:"【买3提送1提】采琪采迷你6包抽纸家居...",
         b1:"￥10",
         span1:"月销3557件"
       },
       {
         src1:"./img/list1.jpg",
         p1:"【买1送1】御泥坊亮颜水润梦幻丝宠面...",
         b1:"￥297",
         span1:"月销2286件"
       },
       {
         src1:"./img/list2.jpg",
         p1:"【买3提送1提】采琪采迷你6包抽纸家居...",
         b1:"￥10",
         span1:"月销3557件"
       }
     ];
     $scope.items2 = items2;
  }])
