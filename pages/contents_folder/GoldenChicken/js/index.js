/**
 * Created by gaotianyang(13683265113@163.com) on 2017/3/23.
 **/
var game={
    run: true,          //游戏是否开始
    deg: 0,             //小鸡角度
    regulation:true,    //小鸡转动方向
    waggleMin: -10,     //小鸡晃动最小角度
    waggleMax: 10,      //小鸡晃动最大角度
    //初始化
    init:function(){
        $('.chicken-gift').css({display:"block"});
        $('.chicken-box').css({transform:"rotate(0deg)"});
        game.time(16);
        $('#stage').click(function(){
            game.start();
        });
    },
    start:function(){
        console.log("start");
        $('.chicken-gift').css({display:"none"});
    },
    //定时器
    time:function (millisec) {
        var _millisec = millisec || 1000;
        (function T(){
            setTimeout(function(){
                if(game.run){
                    game.waggle(game.waggleMin,game.waggleMax);
                    game.rotate(game.deg);
                    console.log(game.deg);
                    T();
                }else{
                    console.log("停止旋转");
                }
            },_millisec);
        })();
    },
    //小鸡旋转
    rotate:function(deg){
        $('.chicken-box').css({transform:"rotate("+deg+"deg)"});
    },
    //起始小鸡晃动
    waggle:function(min,max){
        if(game.regulation){
            game.deg+=0.5;
            if(game.deg>max){
                game.regulation=false;
            }
        }else{
            game.deg-=0.5;
            if(game.deg<min){
                game.regulation=true;
            }
        }
    }
};

//页面加载后：页面加载后自动触发！
window.onload=function(){
    game.init();
};