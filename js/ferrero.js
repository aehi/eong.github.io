$(function(){
    // 메뉴 fixed
    var hd = $('header'),
        win = $(window);

    hd.on({
        'mouseenter focus':function(){hd.addClass('fixed');},
        'mouseleave blur':function(){
            if(win.scrollTop() == 0){
                hd.removeClass('fixed');
            }
        }
    }); 
    win.scroll(function(){
        win = $(this)
        win_top = win.scrollTop();
        
        if(win_top > 0) {
            hd.addClass('fixed');
        }else{
            hd.removeClass('fixed');
        };
    })
    
    // scroll slide box
    
    function slideAni(ws,st){
        
        if(ws.scrollTop() >= st.offset().top - $(this).height()){
            st.addClass('ani');
        }else{
            st.removeClass('ani');
        }
   }

    
    $(window).scroll(function(){
        var win = $(this);
        
        slideAni(win,$('.values'));
        slideAni(win,$('.value_icon'));
        slideAni(win,$('.golden'));
        slideAni(win,$('.story'));
        slideAni(win,$('.sustainably'));
        slideAni(win,$('.productInner'));
        slideAni(win,$('.tips'));
        slideAni(win,$('.golden_text'));
        slideAni(win,$('.shareInner'));
        slideAni(win,$('.sns_icon'));
    });
    
    // nav 버튼
    $('.btn_nav').click(function(){
        $(this).toggleClass('on');
        $('#navWrap').toggleClass('active');
    });
    
    
    // visual slick
    $('#visual .main_slider').slick({
        dots:true,
        arrows:false,
        infinite:true,
        speed:500,
        autoplay:true,
        autoplaySpeed:5000,
        pauseOnHover:false,
        fade:true,
        cssEase:'linear'
    });
    
    
    //product slick
    
    $('.product .sliderInner').slick({
        slidesToShow:3,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:3000,
        speed:500,
        dots:true,
        arrow:true,
        responsive:[
					{
						breakpoint:1350, 
						settings:{
							slidesToShow:2
						}
					},
					{
						breakpoint:1024,
						settings:{
							slidesToShow:1
						}
					},
                    {
						breakpoint:768,
						settings:{
                            slidesToShow:1,
                            arrows:false
						}
					},
                    {
                        breakpoint: 375,
                        settings: {
                            slidesToShow: 1,
                            pauseOnHover:false
                        }
                    }
            
				]
    });
   
    
   
    // famillysite 버튼
    $('.familysite button').click(function(){
        $('.familysite').toggleClass('open');
    });
})
