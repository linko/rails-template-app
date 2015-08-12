function viewport() {
    var e = window, a = 'inner';
    if (!('innerWidth' in window )) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
}
$(document).ready(function(){

    var couple_width = $(".couple_thumbnail").width(),
        left_arrow = $(".left.carousel-control"),
        right_arrow = $(".right.carousel-control"),
        item = '',
        n = '',
        m = '';

    $(window).on("load resize", function() {
        switch (true) {
            case (viewport().width >= 0 && viewport().width <= 1349):

                n = couple_width*4;

                break;

            case (viewport().width >= 1350 && viewport().width <= 1599):

                n = couple_width*5;

                break;

            case (viewport().width >= 1600):

                n = couple_width*6;

                break;
        }
    });

    for (i = 0; i < $(".item.active img").length; i++) {
        img = $(".item.active img").eq(i);
        img.attr('src', images[i]);
        img_number = $.inArray(img.attr('src'), images);
        img.next(".carousel-caption").find("h6").text("Image #" + img_number)
    }

    right_arrow.click(function(){
        left_arrow.removeClass("hide");
        item = $(".item.active");
        item.width($(".couple_thumbnail").width()*$(".couple_thumbnail").length + $(".big_thumbnail").width());

        if ( item.width() + item.position().left - n > n) {
            item.animate({
                "left":  "-="+n+"px"
            },50);
        }
        else if ( item.width() + item.position().left > n) {
            m = item.width() + item.position().left - n;
            item.animate({
                "left": "-="+m+"px"
            },50);
            right_arrow.addClass("hide");
        }

    });

    left_arrow.click(function(){
        item = $(".item.active");

        if (Math.abs(item.position().left) - n > n) {
            item.animate({
                "left": "+="+n+"px"
            }, 50);
        }

        else if (Math.abs(item.position().left) - n < n && Math.abs(item.position().left) > n) {
            item.animate({
                "left": "-" + couple_width*2
            }, 50);
        }

        else if (Math.abs(item.position().left) < n) {
            item.animate({
                "left": "0"
            }, 50);
            left_arrow.addClass("hide");
        }
        right_arrow.removeClass("hide");
    });

});
