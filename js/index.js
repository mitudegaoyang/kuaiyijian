/**
 * Created by gaotianyang(13683265113@163.com) on 2017/3/21.
 **/
var myArticle=[
        { "url":"pages/demo01.html" , "img":"" , "title":"demo01" , "text":"213" },
        { "url":"pages/demo01.html" , "img":"" , "title":"demo02" , "text":"213" }];
var myProject=[
        { "url":"pages/contents_folder/resume/index.html" , "img":"img/images/mypic1.jpg" , "title":"电子简历" , "text":"213" },
        { "url":"pages/contents_folder/3Dmove/share.html" , "img":"img/images/mypic2.jpg" , "title":"店庆抓小鸡" , "text":"213" },
        { "url":"pages/contents_folder/calc/calc.html" , "img":"img/images/mypic3.jpg" , "title":"移动端计算器" , "text":"213" },
        { "url":"pages/contents_folder/yumaojinfu/maoyuMoney.html" , "img":"img/images/mypic4.jpg" , "title":"鱼猫金服" , "text":"213" },
        { "url":"pages/contents_folder/yumaonianhui/index.html" , "img":"img/images/mypic5.jpg" , "title":"鱼猫年会" , "text":"213" }];
//动态加载文章内容
(function(){
        $(".my-article .row").html("");
        for(var i=0;i<myArticle.length;i++){
            var img=(myArticle[i].img=="")?"":"<img src=`+myArticle[i].img+` alt=‘...’>";
            $(".my-article .row").append(`
                <div class="col-xs-12">
                    <div class="thumbnail">
                        `+img+`
                        <div class="caption">
                            <h3>`+myArticle[i].title+`</h3>
                            <p>`+myArticle[i].text+`</p>
                            <p><a href=`+myArticle[i].url+` class="btn btn-default" role="button">查看详情</a></p>
                        </div>
                    </div>
                </div>
            `);
        }
})();
//动态加载项目内容
(function(){
    $(".my-project").html("<p>最新项目</p>");
    for(var i=0;i<myProject.length;i++){
        $(".my-project").append(`
            <div class="media">
                <div class="media-left">
                    <a href=`+myProject[i].url+`>
                        <img class="media-object" src=`+myProject[i].img+` alt="...">
                    </a>
                </div>
                <div class="media-body">
                    <h4 class="media-heading">`+myProject[i].title+`</h4>
                    `+myProject[i].text+`
                </div>
            </div>
        `);
    }
})();