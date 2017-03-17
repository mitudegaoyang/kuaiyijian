/**
 * Created by gaotianyang(13683265113@163.com) on 2017/3/15.
 **/
/*********************计算器开始**************************/
var calc={
    F: true ,           //判断是否为第一次
    R: null ,           //输入
    C: null ,           //结果
    M: null ,           //存储
    N: null ,           //数字位数
    S: true ,           //小数点
    init:function(){    //初始化
        /*********************移动端事件绑定开始**************************/

            //阻止默认滑动屏幕
        document.addEventListener('touchmove',function(event){
            event.preventDefault();
        });

        //绑定移动端按钮touch事件
        for(var i=0 ; i<document.getElementsByClassName('Btn').length; i++){
            document.getElementsByClassName('Btn')[i].addEventListener("touchstart", function (e) {
                e.preventDefault();
                //console.log("touchstart");
                $(this).addClass("in");
                calc.count($(this).data("value"));
                calc.backgroundIn();
            });
        }

        for(var j=0 ; j<document.getElementsByClassName('Btn').length; j++){
            document.getElementsByClassName('Btn')[j].addEventListener("touchend", function (e) {
                e.preventDefault();
                $(this).removeClass("in");
                calc.backgroundOut();
                //console.log("touchend");
            });
        }

        /*********************移动端事件绑定结束**************************/
    },
    /*********************按钮样式变化开始************************/
    //按钮按下
    backgroundIn:function(){
        $(".Btn.in").css({background:"#bcbdc0"});
        $(".Gray_Btn.in").css({background:"#b2b4b5"});
        $(".Orange_Btn.in").css({background:"#e07e0f"});
    },
    //按钮抬起
    backgroundOut:function(){
        $(".Btn").css({background:"#d1d2d5"});
        $(".Gray_Btn").css({background:"#c5c5c7"});
        $(".Orange_Btn").css({background:"#f9850f"});
    },
    /*********************按钮样式变化结束************************/


    /*********************计算器主体开始************************/
    //识别按钮内容
    count:function(num){
        switch(num)
        {
            //数字
            case 1:
                calc.numBtn(num);
                break;
            case 2:
                calc.numBtn(num);
                break;
            case 3:
                calc.numBtn(num);
                break;
            case 4:
                calc.numBtn(num);
                break;
            case 5:
                calc.numBtn(num);
                break;
            case 6:
                calc.numBtn(num);
                break;
            case 7:
                calc.numBtn(num);
                break;
            case 8:
                calc.numBtn(num);
                break;
            case 9:
                calc.numBtn(num);
                break;
            case 0:
                calc.numBtn(num);
                break;
            case "Spot_Btn":
                calc.numBtn(".");
                break;
            //运算符
            case "Add_Btn":     //加法
                calc.operatorBtn("+");
                break;
            case "Sub_Btn":     //减法
                calc.operatorBtn("-");
                break;
            case "Mul_Btn":     //乘法
                calc.operatorBtn("*");
                break;
            case "Div_Btn":     //除法
                calc.operatorBtn("/");
                break;
            case "Opp_Btn":
                calc.typeidBtn(num);
                break;
            case "Sqrt_Btn":
                calc.typeidBtn(num);
                break;
            case "Mod_Btn":
                calc.typeidBtn(num);
                break;
            case "Rec_Btn":
                calc.typeidBtn(num);
                break;
            //等于
            case "Res_Btn":
                if($(".Ctext").text()!="C"&&$(".Ctext").text()!=""&&$(".Rtext").text()!="R"){
                    if(eval($(".Ctext").text())>=0){
                        $(".Rtext").append($(".Ctext").text());
                    }else{
                        $(".Rtext").append("("+$(".Ctext").text()+")");
                    }
                    calc.C=eval($(".Rtext").text());
                    calc.N=calc.C.toString();
                    if(calc.N.length>9){
                        calc.C=calc.C.toExponential([1]) ;
                    }
                    $(".Ctext").text(calc.C);
                    $(".Rtext").text("");
                    calc.F=true;
                }
                calc.fontSize();
                break;
            //清除
            case "Back_Btn":
                if($(".Ctext").text()!="C"&&$(".Ctext").text()!=""){
                    $(".Ctext").text($(".Ctext").text().substr(0,$(".Ctext").text().length-1));
                }
                calc.fontSize();
                break;
            case "CE_Btn":
                if($(".Ctext").text()!="C"){
                    $(".Ctext").text("0");
                }
                calc.fontSize();
                break;
            case "C_Btn":
                if($(".Ctext").text()!="C"||$(".Rtext").text()!="R"){
                    calc.F=true;
                    calc.S=true;
                    $(".Rtext").text("R");
                    $(".Ctext").text("C");
                }
                calc.fontSize();
                break;
            //存储器
            case "MC_Btn":      //清除
                calc.storageBtn(num);
                break;
            case "MR_Btn":      //读取
                calc.storageBtn(num);
                break;
            case "MS_Btn":      //存储
                calc.storageBtn(num);
                break;
            case "MAdd_Btn":    //累加
                calc.storageBtn(num);
                break;
            case "MSub_Btn":    //累减
                calc.storageBtn(num);
                break;
            default:
                console.log("other");
        }
    },
    //数字(0 1 2 3 4 5 6 7 8 9 .)
    numBtn:function(num){
        if($(".Ctext").text().length==9){
            return;
        }
        if(this.F){
            $(".Rtext").text("");
            $(".Ctext").text("");
            this.F=false;
        }
        if($(".Ctext").text()=="0"){
            $(".Ctext").text("");
        }
        if(num!="."){
            $(".Ctext").append(num);
        }else{
            if(this.S){
                console.log(num);
                $(".Ctext").append(num);
                this.S = false;
            }
        }
        this.fontSize();
    },
    //基础运算(+ - * /)
    operatorBtn:function(num){
        if($(".Rtext").text()=="R"&&num=="-"){
            $(".Rtext").text("");
            $(".Ctext").text("");
            $(".Rtext").append(num);
            this.F=false;
        }else{
            if($(".Rtext").text()!="R"&&this.F){
                $(".Rtext").text("");
                this.F=false;
            }
            if(!this.F&&$(".Ctext").text()!=""){
                if(eval($(".Ctext").text())>=0){
                    $(".Rtext").append($(".Ctext").text());
                }else{
                    $(".Rtext").append("("+$(".Ctext").text()+")");
                }
                $(".Ctext").text("");
                $(".Rtext").append(num);
            }
        }
        this.S = true;
        this.fontSize();
    },
    //其他计算按钮(± √ % 1/x)
    typeidBtn:function(num){
        if($(".Ctext").text()!="C"&&$(".Ctext").text()!=""){
            switch(num){
                case "Opp_Btn":     //正负
                    calc.C=-eval($(".Ctext").text());
                    break;
                case "Sqrt_Btn":    //开根号
                    if(eval($(".Ctext").text())>=0){
                        calc.C=Math.sqrt(eval($(".Ctext").text()));
                    }else{
                        calc.C="错误";
                        calc.F=true;
                    }
                    break;
                case "Mod_Btn":     //百分号
                    calc.C=eval($(".Ctext").text())/100;
                    break;
                case "Rec_Btn":     //取倒数
                    calc.C=1/eval($(".Ctext").text());
                    break;
                default:
                    console.log("other");
            }
            $(".Ctext").text(calc.C);
            calc.fontSize();
            calc.F = false;
            calc.S = true;
        }
    },
    //存储器M
    storageBtn:function(num){
        calc.fontSize();
        switch(num){
            case "MC_Btn":
                calc.M = null;
                break;
            case "MR_Btn":
                if(calc.M!=null){
                    $(".Rtext").text("");
                    $(".Ctext").text(calc.M);
                }
                break;
            case "MS_Btn":
                if($(".Ctext").text()!=""&&$(".Ctext").text()!="C"){
                    calc.M = $(".Ctext").text();
                }
                break;
            case "MAdd_Btn":
                if(calc.M!=null) {
                    $(".Ctext").text(eval($(".Ctext").text() + "+" + calc.M));
                }
                break;
            case "MSub_Btn":
                if(calc.M!=null) {
                    $(".Ctext").text(eval($(".Ctext").text() + "-" + calc.M));
                }
                break;
        }
    },
    //字号判断
    fontSize:function(){
        if($(".Ctext").text().length>8){
            $(".Ctext").css({"font-size":"4.5rem"});
        }else{
            $(".Ctext").css({"font-size":"5rem"});
        }
    }
    /*********************计算器主体结束************************/
};
/*********************计算器结束**************************/

//页面加载后：页面加载后自动触发！
window.onload=function(){
    calc.init();
};