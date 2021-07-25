$(function(){

    // scroll slide box
    
    function slideAni(ws,st){
        
        if(ws.scrollTop() >= st.offset().top - $(this).height() ){
            st.addClass('ani');
        }else{
            st.removeClass('ani');
        }
   }

    
    $(window).scroll(function(){
        var win = $(this);
        
        slideAni(win,$('.banner1'));
        slideAni(win,$('.banner2'));
        slideAni(win,$('.banner3'));
        slideAni(win,$('.banner4'));
        slideAni(win,$('.banner5'));
        slideAni(win,$('.video_box'));
        slideAni(win,$('.btn_box'));
    });
})