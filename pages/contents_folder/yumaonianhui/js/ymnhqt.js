$(document).ready(function(){
    $.ajax({
        type:"get",
        url:"data/quanti.php",
        async:true,
        success:function(msg){
            xinm=msg;
            pcount = xinm.length;//参加人数==0 ?==1
            console.log(xinm);
            if(pcount<td){
                td=pcount;
            }
        },
        complete:function(){
            start();
        }
    });
});
var xinm ;
var nametxt = $('.name');
//var phonetxt = $('.phone');
var pcount;
var runing = true;
var num = 0;
var t;
var zhongzhi= true;
var goodluck=0;
var timer;
//auto 抽取幸运名单
function autoLuck(){
    if(timer){
        return;
    }
    timer=setInterval('start()',1000);
    if(td == 0){
        clearInterval(timer);
    }
}
//开始停止
function start() {
    if(zhongzhi){
        if (runing) {
            runing = false;
            $('#btntxt').removeClass('start').addClass('stop');
            //$('#btntxt').html('停止');
            startNum()
        } else {
            runing = true;
            $('#btntxt').removeClass('stop').addClass('start');
            //$('#btntxt').html('开始');
            stop();
            zd();

        }
    }
}
var arr1=[];

//循环参加名单 没有实际意义
function startNum() {
    num = Math.floor(Math.random() * pcount);
    //console.log(num);
    nametxt.html(xinm[num].uname);
//	phonetxt.html(xinm[num].uid);
    t = setTimeout(startNum, 0);
}
//停止跳动
function stop() {
    //pcount = xinm.length-1;
    clearInterval(t);
    t = 0;
    suiji();

}

//不重复的随机数
function suiji(){
    var suiji=Math.floor(Math.random() * pcount);
    if(arr1==[]){
        arr1.push(suiji);
        goodluck=suiji;
    }else if($.inArray(suiji,arr1)==-1){
        arr1.push(suiji);
        goodluck=suiji;
    }else{
        while(true){
            if($.inArray(suiji,arr1)!==-1){
                suiji=Math.floor(Math.random() * pcount);
            }else{
                goodluck=suiji;
                arr1.push(suiji);
                break;
            }
        }
    }
}
function zd() {
    if(td >= 1){
        //打印中奖者名单
        $('.list').append("<p>"+xinm[goodluck].uname+"</p>");
        $('#autoLuck').html('恭喜');
        $.ajax({
            type: "POST",
            url: "data/luck-set.php",
            data: {uid:xinm[goodluck].uid,uprize:gift},
            success: function(msg){
                console.log(msg);
            }
        });
        nametxt.html(xinm[goodluck].uname);
        //phonetxt.html(xinm[goodluck].uid);
        //将已中奖者从数组中"删除",防止二次中奖
        //xinm.splice($.inArray(xinm[num], xinm), 1);

    }
    td = td - 1;
    if(td <=0){
        zhongzhi=false;
    }

}
