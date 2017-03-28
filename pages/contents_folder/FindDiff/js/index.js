/**
 * Created by gaotianyang(13683265113@163.com) on 2017/3/28.
 **/
var game={
    //初始化
    init:function(){
        game.skip('game');
        //game.skip('share');
        $('.startBtn').click(function(){
            game.skip('game');
        });
        $('.particBtn').click(function(){
            game.skip('index');
        });
    },
    skip:function(className){
        $('#index').hide();
        $('#game').hide();
        $('#share').hide();
        $('#'+className).show();
    }
};

//页面加载后：页面加载后自动触发！
window.onload=function(){
    game.init();
};