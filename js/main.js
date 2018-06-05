$(function () {


    //滚动至第二屏打开弹窗
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        if (scrollTop < 650) {
            $(".right-fix").css("display", "none")
        } else if (scrollTop > 650) {
            $(".right-fix").css("display", "block")
        };
    });
    $(".advantage li .li_wrap").on("mouseover", function () {
        $(this).find(".img_name").hide();
        $(this).find(".mask").show();
    })
    $(".advantage li .li_wrap").on("mouseout", function () {
        $(this).find(".img_name").show();
        $(this).find(".mask").hide();;
    })

    $(".erweimaShow").hover(function () {
        $(".gzhewm").show();
    }, function () {
        $(".gzhewm").hide();
    })
    $(".navWrap a").on("click", function () {
        $(".navWrap a").removeClass("on")
        $(this).addClass("on");
    })
  
    // 锚点平滑过渡
    $("a").click(function () {

        $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top -20+ "px"}, 500);
    
        return false;//不要这句会有点卡顿
    
    });
    // 多行省略号
    $('.lightspot_left .left_text p').each(function () {
        //设置显示获取字符串的字数  这个根绝要求 看需要大概显示几行
        var sec_maxwidth = 65;
        if ($(this).text().length > sec_maxwidth) {
            //截取字符串
            $('.lightspot_left .left_text p').show();
            $(this).text($(this).text().substring(0, sec_maxwidth));
            //多余的用省略号显示
            $(this).html($(this).html() + '...' );
        }
    });

})