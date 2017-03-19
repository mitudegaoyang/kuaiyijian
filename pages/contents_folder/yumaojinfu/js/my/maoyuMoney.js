//----5----
var app = angular.module('myApp',['ionic']);
//----6----

app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state('start',{
            url:"/start",
            templateUrl:'tpl/start.html',
            controller:'startCtrl'
        })
        .state('finance',{
            url:"/finance",
            templateUrl:'tpl/finance.html',
            controller:'financeCtrl'
        })
        .state('home',{
            url:"/home",
            templateUrl:'tpl/home.html'
        })
        .state('center',{
            url:"/center",
            templateUrl:'tpl/center.html'
        })
        .state('about',{
            url:"/about",
            templateUrl:'tpl/about.html',
            controller:'aboutCtrl'
        })
        .state('about.introduce',{
            url:"/introduce",
            templateUrl:'tpl/include/introduce.html'
        })
        .state('about.pinpai',{
            url:"/pinpai",
            templateUrl:'tpl/include/pinpai.html'
        })
        .state('about.bangong',{
            url:"/bangong",
            templateUrl:'tpl/include/bangong.html'
        })
        .state('about.shiji',{
            url:"/shiji",
            templateUrl:'tpl/include/shiji.html'
        })
        .state('about.touchus',{
            url:"/touchus",
            templateUrl:'tpl/include/touchus.html'
        })
        .state('about.costdesc',{
            url:"/costdesc",
            templateUrl:'tpl/include/costdesc.html'
        })
        .state('about.mediaReport',{
            url:"/mediaReport",
            templateUrl:'tpl/include/mediaReport.html'
        })
        .state('about.invite',{
            url:"/invite",
            templateUrl:'tpl/include/invite.html'
        })
        .state('about.teamwork',{
            url:"/teamwork",
            templateUrl:'tpl/include/teamwork.html'
        })
        .state('about.law',{
            url:"/law",
            templateUrl:'tpl/include/law.html'
        });
        $urlRouterProvider.otherwise('start');
});

//----7----
app.controller('parentCtrl',['$scope','$location','$rootScope',function($scope,$location,$rootScope){
    $scope.jump=function(arg){
        $location.path(arg)
    };
    $scope.clickMe=function(i){
        $('#about a').removeClass('cur');
        $('#about a:eq('+i+')').addClass('cur');
    };
    $scope.banner=function(i){
        var left=104*i;
        $('#ym-banner-box a').css('color','#000');
        $('#ym-banner-box a:eq('+i+')').css('color','#f00');
        $('.ym-banner-bar').css('left',left+'px');
        $('.ym-banner-bar').addClass('in');
    };
    $rootScope.bannerbar=function(){
        var str=location.href;
        str=str.split('#')[1];
        if(str.substring(0,6)=="/about"){
            $('.ym-banner-bar').css('left','416px');
            $('.ym-banner-bar').addClass('in');
            $('#ym-banner-box a').css('color','#000');
            $('#ym-banner-box a:eq(4)').css('color','#f00');
        }else if(str=="/center"){
            $('.ym-banner-bar').css('left','312px');
            $('.ym-banner-bar').addClass('in');
            $('#ym-banner-box a').css('color','#000');
            $('#ym-banner-box a:eq(3)').css('color','#f00');
        }else if(str=="/home"){
            $('.ym-banner-bar').css('left','208px');
            $('.ym-banner-bar').addClass('in');
            $('#ym-banner-box a').css('color','#000');
            $('#ym-banner-box a:eq(2)').css('color','#f00');
        }else if(str=="/finance"){
            $('.ym-banner-bar').css('left','104px');
            $('.ym-banner-bar').addClass('in');
            $('#ym-banner-box a').css('color','#000');
            $('#ym-banner-box a:eq(1)').css('color','#f00');
        }else if(str=="/start"){
            $('.ym-banner-bar').css('left','0px');
            $('.ym-banner-bar').addClass('in');
            $('#ym-banner-box a').css('color','#000');
            $('#ym-banner-box a:eq(0)').css('color','#f00');
        }
    };
    $scope.removebar=function(){
        $('.ym-banner-bar').removeClass('in');
    };
    var timer;
    $rootScope.mySetInterval=function(num){
        var i=0;
        clearInterval(timer);
        timer=setInterval(function(){
            i--;
            if(i<=num){
                i=0;
            }
            $('#start .ym-dongtai-con ul').css('left',i+'px');
        },10);
    };
    $scope.removetitele=function(i){
        if(i==4){
            $("head title").html("关于我们-鱼猫金服-专业透明安全高效收益");
        }else if(i==3){
            $("head title").html("安全保障-鱼猫金服-专业透明安全高效收益");
        }else if(i==2){
            $("head title").html("个人中心-鱼猫金服-专业透明安全高效收益");
        }else if(i==1){
            $("head title").html("我要投资-投资项目-鱼猫金服-专业透明安全高效收益");
        }else{
            $("head title").html("鱼猫金服-专业透明安全高效收益");
        }
    }
    //滚动
    $rootScope.goto=function(i){
        console.log(i);
        $('html,body').animate({scrollTop:i},700)
    };
}]);

app.controller('headerCtrl',['$scope','$rootScope',function($scope,$rootScope){
    //banner滑动进入
    $(function(){
        $('#ym-banner-box').addClass('bounceInRight');
        setTimeout(function(){
            $('#ym-banner-box').removeClass('bounceInRight');
        }, 1000);
    });
    $rootScope.bannerbar();
}]);

app.controller(['$scope','$rootScope',function($scope,$rootScope){
    $rootScope.clickMe(i);
    $rootScope.goto(i);
}]);

app.controller('startCtrl',['$scope','$rootScope','$http',function($scope,$rootScope,$http){
    $rootScope.mySetInterval(-5625);
    $scope.btnMove=function(i){
        if(i==1){
            $('#ym-banner .ym-l-r-btn .ym-lbtn').css('left','-85px');
        }else if(i==2){
            $('#ym-banner .ym-l-r-btn .ym-lbtn').css('left','-75px');
        }else if(i==3){
            $('#ym-banner .ym-l-r-btn .ym-rbtn').css('left','1225px');
        }else if(i==4){
            $('#ym-banner .ym-l-r-btn .ym-rbtn').css('left','1215px');
        }
    };
    $scope.canClick=true;
    $scope.moveLeft=function() {
        if(!$scope.canClick)
        {
            return;
        }
        $scope.canClick=false;
        var $ul = $("#ym-banner .ym-bancomid ul");
        $ul.prepend($("#ym-banner .ym-bancomid ul li:last-child"));
        $ul.css("left", -290);
        $ul.animate({left: 0}, 500, function () {
            $scope.canClick = true;
        });
    };
    $scope.moveRight=function(){
        if(!$scope.canClick)
        {
            return;
        }
        $scope.canClick=false;
        var $ul = $("#ym-banner .ym-bancomid ul");
        $ul.animate({left: -290 + "px"}, 500, function () {
            $ul.append($("#ym-banner .ym-bancomid ul li:first-child"));
            $ul.css("left", 0);
            $scope.canClick = true;
        });
    };
    $scope.bannerImgIn=function(i){
        $('#ym-banner .ym-bancomid .ym-banner-'+i+' img').css({'opacity':'1','width':'300px','height':'410px'});
    };
    $scope.bannerImgOut=function(i){
        $('#ym-banner .ym-bancomid ul .ym-banner-'+i+' img').css({'opacity':'.8','width':'290px','height':'400px'});
    };

    //加载用户动态数据
    $scope.orderList = [];
    $http.get('data/item_getinstartdttext.php')
        .success(function (data) {
            data.reverse();
            $scope.orderList = data;
        });

    //加载项目数据
    $scope.itemList = [];
    $http.get('data/item_getinstart.php')
        .success(function (data) {
            data.reverse();
            $scope.itemList = data;
        });
}]);

app.controller('financeCtrl',['$scope','$http',function($scope,$http){
    $('#ym-item-list ul a').removeClass('cur');
    $('#ym-item-list ul li:eq(1) a').addClass('cur');
    //加载数据
    $scope.itemList = [];
    $http.get('data/item_getbydeadline.php?deadline=0')
        .success(function (data) {
            data.reverse();
            $scope.itemList = data;
        });
    $scope.lodedeadline=function(i){
        $('#ym-item-list ul a').removeClass('cur');
        $('#ym-item-list ul li:eq('+(i+1)+') a').addClass('cur');
        $scope.itemList = [];
        $http.get('data/item_getbydeadline.php?deadline='+i)
            .success(function (data) {
                data.reverse();
                $scope.itemList = data;
            });
    }
}]);

app.controller('aboutCtrl',['$scope','$rootScope',function($scope,$rootScope){
    var str=location.href;
    str=str.split('#')[1];
    if(str.substring(0,6)!=="/about"){
        sessionStorage.clear();
    }
    var act=sessionStorage.getItem('aboutNum');    //取数据
    if(act==undefined){
        $('#about a').removeClass('cur');
        $('#about a:eq('+0+')').addClass('cur');
    }else{
        $('#about a').removeClass('cur');
        $('#about a:eq('+act+')').addClass('cur');
    }
    $scope.jump=function(arg){
        $location.path(arg)
    };
    $rootScope.clickMe=function(i){
        $('#about a').removeClass('cur');
        $('#about a:eq('+i+')').addClass('cur');
        sessionStorage.setItem('aboutNum',i);          //存储/更新数据
    };

    //手风琴
    $scope.panel=function(i){
        $('#invite dt:eq('+i+')').next('dd').toggleClass('hide')
    }
}]);

