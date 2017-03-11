/**
 * Created by gaotianyang on 2017/3/9.
 */
//遮罩层控制
$(function () {
    //点击开始游戏 蒙板消失
    $(".mb_start_btn").click(function () {
        $(".mask_black").hide();
        $(".mb_start").hide();
        $(".mb_rule_box").hide();
    });
    //点击显示活动规则
    $(".mb_activity_rule").click(function () {
        $(".mask_black").show();
        $(".mb_rule_box").show();
    });
    //点击蒙板 提示消失
    $(".mask_black").click(function () {
        $(".mb_start").hide();
        $(".mask_black").hide();
        $(".mb_rule_box").hide();
        $(".mb_prize_box").hide();
    });
    // 点击显示我的奖品
    $(".mb_myprize").click(function () {
        $(".mask_black").show();
        $(".mb_prize_box").show();
    });

    //分享助力
    $(".mb_btn_help").click(function(e){
        e.stopPropagation();
        $(".mask_share").fadeIn();
    });
    $(".mask_share").click(function(){
        $(".mask_share").fadeOut();
    })
});

//3d主体
$(document).ready(function () {
    //手写拖拽
    var params = {
        currentX: 0,       //鼠标x坐标
        oldCurrentX: 0,      //之前鼠标X坐标
        disX: 0,             //坐标差
        flag: false,       //鼠标状态
        //currentY: 0,       //鼠标y坐标
        //disY: 0,             //相对Y坐标
        //currentBlock: 1,     //当前显示的块
        phoneDis:function(event){
            //获取触摸点位置
            var e = event || window.event;
            var touch = e.touches[0];
            params.oldCurrentX=parseInt(touch.pageX);
        },
        getMousePos:function(event){
            if(params.flag){
                //获取鼠标位置
                var e = event || window.event;
                var touch = e.touches[0];
                params.currentX=parseInt(touch.pageX);
                params.disX=params.currentX-params.oldCurrentX;
                params.oldCurrentX=params.currentX;
            }
        }
    };


    //创建场景
    var s = new C3D.Stage();
    s.size(window.innerWidth, window.innerHeight).material({
        color: "#f9d596"
        //background:"url(../images/front.jpg)"
    }).update();
    document.getElementById('main').appendChild(s.el);


    //创建1个立方体放入场景

    //游戏层
    //var gamePanoRect = {w: 120, h: 120};
    //var gameBgData = [
    //    {url: 'images/icon.png'},
    //    {url: 'images/icon.png'}
    //];

    //商店层
    var shopPanoRect = {w: 2360, h: 1206};
    var shopBgData = [
        {url: 'images/dwl/qp/qp1.png'},
        {url: 'images/dwl/qp/qp2.png'},
        {url: 'images/dwl/qp/qp3.png'},
        {url: 'images/dwl/qp/qp4.png'},
        {url: 'images/dwl/qp/qp5.png'},
        {url: 'images/dwl/qp/qp6.png'},
        {url: 'images/dwl/qp/qp7.png'},
        {url: 'images/dwl/qp/qp8.png'},
        {url: 'images/dwl/qp/qp9.png'},
        {url: 'images/dwl/qp/qp10.png'},
        {url: 'images/dwl/qp/qp11.png'},
        {url: 'images/dwl/qp/qp12.png'},
        {url: 'images/dwl/qp/qp13.png'},
        {url: 'images/dwl/qp/qp14.png'},
        {url: 'images/dwl/qp/qp15.png'},
        {url: 'images/dwl/qp/qp16.png'},
        {url: 'images/dwl/qp/qp17.png'},
        {url: 'images/dwl/qp/qp18.png'},
        {url: 'images/dwl/qp/qp19.png'},
        {url: 'images/dwl/qp/qp20.png'}
    ];

    //背景层
    var mountainPanoRect = {w: 2580, h: 1306};
    var mountainBgData = [
        {url: 'images/dwl/bp/bp1.jpg'},
        {url: 'images/dwl/bp/bp2.jpg'},
        {url: 'images/dwl/bp/bp3.jpg'},
        {url: 'images/dwl/bp/bp4.jpg'},
        {url: 'images/dwl/bp/bp5.jpg'},
        {url: 'images/dwl/bp/bp6.jpg'},
        {url: 'images/dwl/bp/bp7.jpg'},
        {url: 'images/dwl/bp/bp8.jpg'},
        {url: 'images/dwl/bp/bp9.jpg'},
        {url: 'images/dwl/bp/bp10.jpg'},
        {url: 'images/dwl/bp/bp11.jpg'},
        {url: 'images/dwl/bp/bp12.jpg'},
        {url: 'images/dwl/bp/bp13.jpg'},
        {url: 'images/dwl/bp/bp14.jpg'},
        {url: 'images/dwl/bp/bp15.jpg'},
        {url: 'images/dwl/bp/bp16.jpg'},
        {url: 'images/dwl/bp/bp17.jpg'},
        {url: 'images/dwl/bp/bp18.jpg'},
        {url: 'images/dwl/bp/bp19.jpg'},
        {url: 'images/dwl/bp/bp20.jpg'}
    ];

    function createPano(imgs, rect) {
        var _len = imgs.length;
        var _step = rect.w / _len;
        var _radius = Math.floor(_step / 2 / Math.tan(Math.PI / _len)) - 1;

        var _sp = new C3D.Sprite();
        for (var i = 0; i < _len; i++) {
            var _p = new C3D.Plane();
            var _r = 360 / _len * i;
            var _a = Math.PI * 2 / _len * i;
            _p.size(_step, rect.h).position(Math.sin(_a) * _radius, 0, -Math.cos(_a) * _radius).rotation(0, -_r, 0).material({
                image: imgs[i].url,
                repeat: 'no-repeat',
                bothsides: false
            }).update();
            _sp.addChild(_p);
        }

        return _sp;
    }

    //游戏层(第一层)
    //var gamePano = createPano(gameBgData, gamePanoRect);
    //gamePano.position(0, 0, -100).updateT();
    //s.addChild(gamePano);

    //商店层(第二层)
    var shopPano = createPano(shopBgData, shopPanoRect);
    shopPano.position(0, 0, -300).updateT();
    s.addChild(shopPano);
    
    //背景层(第三层)
    var mountainPano = createPano(mountainBgData, mountainPanoRect);
    mountainPano.position(0, 0, -400).updateT();
    s.addChild(mountainPano);

    //响应屏幕调整尺寸
    function resize() {
        s.size(window.innerWidth, window.innerHeight).update();
    }

    window.onresize = function () {
        resize();
    };
    resize();

    //刷新场景
    requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame ||
    function (callback) {
        setTimeout(callback, 1000 / 60);
    };

    function goLeft() {

        rotateDistance -= 1;
        //gamePano.rotate(0, 0.01, 0).updateT();
        shopPano.rotate(0, 0.04, 0).updateT();
        mountainPano.rotate(0, 0.03, 0).updateT();
        if (rotateDistance > 0) {
            requestAnimationFrame(goLeft);
        }

    }

    function goRight() {

        rotateDistance -= 1;
        //gamePano.rotate(0, -0.01, 0).updateT();
        shopPano.rotate(0, -0.04, 0).updateT();
        mountainPano.rotate(0, -0.03, 0).updateT();
        if (rotateDistance > 0) {
            requestAnimationFrame(goRight);
        }

    }

    //给最大的盒子增加事件监听(滑动页面)
    $("#main").swipe({
        swipeLeft:function(event, direction, distance, duration, fingerCount){
            console.log("goLeft");
        },
        swipeRight:function(event, direction, distance, duration, fingerCount){
            console.log("goRight");
        },
        swipeStatus: function (event, phase, direction, distance, duration, fingerCount, fingerData, currentDirection) {
            rotateDistance = distance;
            if (params.disX<0) {        //向左滑动页面
                console.log("goLeft");
                requestAnimationFrame(goLeft);
            } else if (params.disX>0) {      //向右滑动页面
                console.log("goRight");
                requestAnimationFrame(goRight);
            }
        },
        threshold: 10
    });

    //绑定移动端touch事件
    document.getElementById('main').addEventListener("touchstart", function(){
        console.log("touchstart");
        params.flag= true;
        params.phoneDis();
        //gamePano.position(0, 0, -110).updateT();
        shopPano.position(0, 0, -310).updateT();
        mountainPano.position(0, 0, -410).updateT();
    });
    document.getElementById('main').addEventListener("touchend", function(){
        console.log("touchend");
        params.flag= false;
        //gamePano.position(0, 0, -100).updateT();
        shopPano.position(0, 0, -300).updateT();
        mountainPano.position(0, 0, -400).updateT();
    });
    document.getElementById('main').addEventListener("touchmove", function(){
        params.getMousePos(event)
    });

});