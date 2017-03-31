/**
 * Created by gaotianyang(13683265113@163.com) on 2017/3/28.
 **/
var game={
    time: 60,       //倒计时
    lv: 1,          //关数
    gameGo: false,  //游戏是否进行
    //初始化
    init:function(){
        game.skip('share');
        $('.lv span').text(game.lv);
        $('.startBtn').click(function(){
            game.gameGo = true;
            game.time = 60;
            game.lv = 1;
            game.skip('game');
            game.countDown(1000);
        });
        $('.particBtn').click(function(){
            game.skip('index');
        });
        $('.pauseBtn').click(function(){
            game.gameGo = !game.gameGo;
            game.countDown(1000);
        });
        game.renovate();
    },
    //页面跳转
    skip:function(className){
        $('#index').hide();
        $('#game').hide();
        $('#share').hide();
        $('#'+className).show();
    },
    //修改样式
    monitor:function(){
        $('.abrus').click(function(){
            game.lv++;
            $('.lv span').text(game.lv);
            if(game.lv <= 17){
                $('#stage').removeClass();
                $('#stage').addClass("lv"+game.lv);
            }
            game.renovate();
            $('#stage span').css({backgroundColor:"rgb("+game.GetRandomNum(0,256)+","+game.GetRandomNum(0,256)+","+game.GetRandomNum(0,256)+")"});
        });
    },
    //绘制栅格
    renovate:function(){
        switch(game.lv){
            case 1:
                game.draw(4);
                break;
            case 2:
                game.draw(9);
                break;
            case 3:
                game.draw(16);
                break;
            case 4:
            case 5:
                game.draw(25);
                break;
            case 6:
            case 7:
                game.draw(36);
            break;
            case 8:
            case 9:
            case 10:
                game.draw(49);
            break;
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
                game.draw(64);
                break;
            default:
                game.draw(81);
            break;
        }
    },
    //绘制格子
    draw:function(num){
        $('#stage').html("");
        for(var i=0;i<num;i++){
            $('#stage').append("<span></span>")
        }
        $('#stage span:nth-child('+game.GetRandomNum(1,num)+')').addClass("abrus");
        game.monitor();
    },
    //获得随机数
    GetRandomNum:function(Min,Max){
        var Range = Max - Min;
        var Rand = Math.random();
        return(Min + Math.round(Rand * Range));
    },
    //倒计时
    countDown:function timeout(time){
        console.log(game.gameGo);
        if(game.gameGo){
            $('.time').text(game.time);
            game.time--;
            setTimeout(function(){
                if(game.time<0){
                    if(game.lv<10){
                        alert("不要气馁，虽然只抢到"+game.lv+"碗粥，叫上小伙伴一起多抢几碗吧！");
                    }else{
                        alert("厉害啊！竟然抢到了"+game.lv+"碗粥，还不叫小伙伴一起参加？");
                    }
                    return;
                }
                timeout(time);
            },time);
        }
    }
};

//页面加载后：页面加载后自动触发！
window.onload=function(){
    game.init();
};