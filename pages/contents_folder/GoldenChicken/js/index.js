/**
 * Created by gaotianyang(13683265113@163.com) on 2017/3/23.
 **/
var game={
    run: true,          //游戏是否开始
    deg: 0,             //小鸡角度
    dizzydeg: 0,        //眩晕眼睛角度
    coe: 0,             //系数
    scoreTime: 0,        //坚持秒数
    listenGo: false,     //是否监听
    regulation: true,    //小鸡转动方向 true左 false右
    waggleGo: true,     //是否晃动
    waggleMin: -10,     //小鸡晃动最小角度
    waggleMax: 10,      //小鸡晃动最大角度
    timer: null,
    //初始化
    init:function(){
        $('.chicken-gift').css({display:"block"});
        $('.dizzyLeftEye').css({display:"none"});
        $('.dizzyRightEye').css({display:"none"});
        $('.chicken-box').css({transform:"rotate(0deg)"});
        game.time(16);
        $('.startBtn').click(function(){
            game.start();
        });
        $('.againBtn').click(function(){
            game.start();
        });
    },
    start:function(){
        console.log("start");
        $('.chicken-gift').hide();
        $('.startBtn').text("重新开始");
        $('.gameStart').hide();
        $('.game-progress-time p').css({display:"block"});
        $('.game-progress-time p span').text("0");
        this.waggleGo = false;
        this.listenGo = true;
        this.deg = 0;
        this.scoreTime = 0;
        this.listen();
        clearInterval(game.timer);
        game.timer = setInterval(function(){
            if(game.listenGo){
                game.scoreTime++;
                $('.game-progress-time p span').text(game.scoreTime);
            }
        },1000);
    },
    //晃动定时器
    time:function (millisec) {
        var _millisec = millisec || 1000;
        (function T(){
            setTimeout(function(){
                if(game.run){
                    game.waggle(game.waggleMin,game.waggleMax);
                    game.rotate(game.deg);
                    game.dizzyEye(game.dizzydeg);
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
        if(this.waggleGo){
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
    },
    //小鸡眩晕眼睛旋转
    dizzyEye:function(deg){
        game.dizzydeg+=5;
        if(game.dizzydeg>360){
            game.dizzydeg = 0;
        }
        $('.dizzyLeftEye').css({transform:"rotate("+deg+"deg)"});
        $('.dizzyRightEye').css({transform:"rotate("+deg+"deg)"});
    },
    //监听手机旋转
    listen:function(){
        if(game.listenGo){
            window.addEventListener('deviceorientation', function(e){
                //console.log('absolute: ' + e.absolute);
                //console.log('alpha: ' + e.alpha);
                //console.log('beta: ' + e.beta);
                //console.log('gamma: ' + e.gamma);
                game.coe = Math.floor(e.gamma * (game.scoreTime + 10) * 5)/100;
                game.move();
            });
        }
    },
    //小鸡移动
    move:function(){
        if(game.listenGo){
            //$('.game-logo').text("coe:"+game.coe);
            this.deg += game.coe;
            if(this.deg >= 90 || this.deg <= -90){
                $('.gameStart').show();
                //$('.game-logo').text('游戏结束!');
                game.coe = 0;
                game.deg = 0;
                game.listenGo = false;
                clearInterval(game.timer);
            }
        }
    }
};

//页面加载后：页面加载后自动触发！
window.onload=function(){
    game.init();
};