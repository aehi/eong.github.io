$(function(){

    // scroll slide box
    
    function slideAni(ws,st){
        
        if(ws.scrollTop() >= st.offset().top - $(this).height()/2){
            st.addClass('ani');
        }else{
            st.removeClass('ani');
        }
   }

    
    $(window).scroll(function(){
        var win = $(this);
        
        slideAni(win,$('.ostory'));
        slideAni(win,$('.approach'));
        slideAni(win,$('.beginning'));
        slideAni(win,$('.world'));
        slideAni(win,$('.taste'));
        slideAni(win,$('.packaging'));
        slideAni(win,$('.approach_box'));
    });
})