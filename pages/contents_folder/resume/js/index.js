var hidex=function(id,x){
  $(window).scroll(function(){
    var top=$(window).scrollTop();
    if(top<x){
      $(id).fadeOut();
    }else{
      $(id).fadeIn();
    }
  })
}

//根据距离顶部距离，隐藏对应元素，id=header,距离=200
hidex(header,200);
hidex(gotop,700);
$('.animated').mouseenter(function(){
  $(this).removeClass();
  $(this).addClass('animated flash');
})
$('.animated').mouseleave(function(){
  $(this).removeClass('flash');
})

//滚动
var goto=function(id,x){
  $(id).click(function(){
    $('html,body').animate({scrollTop:x},700)
  })
}
goto(gotop,0);
goto(homebtn,0);
goto(mainbtn,750);
goto(skillbtn,1710);
goto(projectbtn,2200);
goto(aboutbtn,2350);
goto(contactbtn,3000);