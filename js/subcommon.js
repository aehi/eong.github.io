$(function(){
       
     // nav 버튼
    $('.btn_nav').click(function(){
        $(this).toggleClass('on');
        $('#navWrap').toggleClass('active');
    });
    
    
    // famillysite 버튼
    $('.familysite button').click(function(){
        $('.familysite').toggleClass('open');
    });
})
