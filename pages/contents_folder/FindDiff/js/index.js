/**
 * Created by gaotianyang(13683265113@163.com) on 2017/3/28.
 **/
var game={
    lv: 1,      //关数
    //初始化
    init:function(){
        game.skip('game');
        $('.lv span').text(game.lv);
        $('.startBtn').click(function(){
            game.skip('game');
        });
        $('.particBtn').click(function(){
            game.skip('index');
        });
        game.renovate();
    },
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
            console.log(game.lv);
            $('.lv span').text(game.lv);
            if(game.lv <= 8){
                $('#stage').removeClass();
                $('#stage').addClass("lv"+game.lv);
            }
            game.renovate();
        });
    },
    //绘制栅格
    renovate:function(){
        switch(game.lv){
            case 1:
                game.draw(4);
                console.log("2x2");
                break;
            case 2:
                game.draw(9);
                console.log("3x3");
                break;
            case 3:
                game.draw(16);
                console.log("4x4");
                break;
            case 4:
            case 5:
                game.draw(25);
                console.log("5x5");
                break;
            case 6:
            case 7:
                game.draw(36);
                console.log("6x6");
            break;
            default:
                game.draw(49);
                console.log("7x7");
            break;
        }
    },
    draw:function(num){
        $('#stage').html("");
        for(var i=0;i<num;i++){
            $('#stage').append("<span></span>")
        }
        $('#stage span:nth-child('+num+')').addClass("abrus");
        game.monitor();
    }
};

//页面加载后：页面加载后自动触发！
window.onload=function(){
    game.init();
};