$("#mobile_menu_labIcon").click(function() {
    $(".nav-bar").toggleClass("on");
    $(".portfolio-filter.isotope-filter.pull-center").toggleClass("on");
    $("#greybg").toggle();
    $('.hamburger').toggleClass('is-active');
})
$("#greybg").click(function() {

    $("#greybg").toggle();
    $(".portfolio-filter.isotope-filter.pull-center").toggleClass("on");
    $('.hamburger').toggleClass('is-active');
})




jQuery(document).ready(function($) {


    var offset = 100,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.cd-top');
    $(window).scroll(function() {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });
    $back_to_top.on('click',
        function(event) {
            event.preventDefault();
            $('body,html').animate({
                    scrollTop: 0,
                },
                scroll_top_duration);
        });


});



//tab 切换
$(".J-nav-tab").each(function() {
    var tthis = $(this)
    $(this).find("a").click(function() {
        var $this = $(this);
        var $obj = $this.attr("href");
        tthis.find("a").removeClass("on")
        $this.addClass("on");
        $($obj).show().siblings().hide()
        return false;
    })
    $(this).find("a").focus(function() {
        var $this = $(this);
        var $obj = $this.attr("href");
        tthis.find("a").removeClass("on")
        $this.addClass("on");
        $($obj).show().siblings().hide()
        return false;
    })
})

$(window).scroll(function() {
    var winWidth = $(window).width(),
        topWindow = $(window).scrollTop();
    if (topWindow > 0 && winWidth > 941) {
        $('header').addClass("small animated fadeInDown");
    } else {
        $('header').removeClass("small animated fadeInDown ");
    }
});
$(window).resize(function() {
    var winWidth = $(window).width();
    if (winWidth < 941) {
        $(".submenu li:nth-child(3) .hasChild").css("display", "none");
        $(".submenu li:nth-child(1) a,.submenu li:nth-child(2) a,.submenu li:nth-child(4) a,.submenu li:nth-child(5) a,.submenu li:nth-child(6) a").click(function() {
            $(".submenu li .hasChild").css("display", "none");
        })
        $(".submenu li:nth-child(3) a span").click(function() {
            $(".submenu li .hasChild").toggle();
        })
    } else {
        $(".submenu li .hasChild").css("display", "block");
        $("#greybg").css("display", "none");
    }

});
$(document).ready(function() {
    var winWidth = $(window).width();
    if (winWidth < 941) {
        $(".submenu li:nth-child(3) .hasChild").css("display", "none");
        $(".submenu li:nth-child(1) a,.submenu li:nth-child(2) a,.submenu li:nth-child(4) a,.submenu li:nth-child(5) a,.submenu li:nth-child(6) a").click(function() {
            $(".submenu li .hasChild").css("display", "none");
        })
        $(".submenu li:nth-child(3) a span").click(function() {
            $(".submenu li .hasChild").toggle();
        })

    } else {
        $(".submenu li .hasChild").css("display", "block");
        $("#greybg").css("display", "none");
    }

});
// $(".submenu li:nth-child(2)").focus(function() {
//     $(".submenu li .hasChild").css("display", "block");
// });
// $(".submenu li:nth-child(3) a").focus(function() {
//     $(".submenu li:nth-child(2) .hasChild").css("display", "none");
// });
// $(".submenu li:nth-child(2)").hover(function() {
//     $(".submenu li .hasChild").css("display", "block");
// });
// $(".submenu li:nth-child(2) .hasChild").mouseleave(function() {
//     $(".submenu li:nth-child(2) .hasChild").css("display", "none");
// });

// /*聚焦*/
// $(".submenu li:nth-child(2)").hover(function() {
//     /* $(this).css("display","block");*/
//     $(".hasChild").addClass('focus');
// });
// $(".submenu li:nth-child(2)").mouseout(function() {
//     /* $(this).css("display","block");*/
//     $(".hasChild").removeClass('focus');
// });
// $(".submenu li:nth-child(2)").focus(function() {
//     /* $(this).css("display","block");*/
//     $(".hasChild").addClass('focus');
// });
// /*失焦*/
// $(".submenu li:nth-child(2)").blur(function() {
//     $(".hasChild").removeClass('focus');
// });