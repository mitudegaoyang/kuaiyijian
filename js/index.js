/**
 * Created by gaotianyang(13683265113@163.com) on 2017/3/21.
 **/
//动态加载文章内容
(function(){
    $(".my-article .row").html("");
    myArticle.length=(myArticle.length>7)?7:myArticle.length;
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
    myProject.length=(myProject.length>10)?10:myProject.length;
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