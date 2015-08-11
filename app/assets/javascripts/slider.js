//function viewport() {
//    var e = window, a = 'inner';
//    if (!('innerWidth' in window )) {
//        a = 'client';
//        e = document.documentElement || document.body;
//    }
//    return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
//}
//
//$(function(){
//
//    var col_length = "",
//        couple = "",
//        slide = "",
//        img_number = "",
//        img = "",
//        img_num = "",
//        n = "",
//        i = "",
//        left_arrow = $(".left.carousel-control"),
//        right_arrow = $(".right.carousel-control");
//
//    $(window).on("load resize", function() {
//        switch (true) {
//            case (viewport().width >= 0 && viewport().width <= 1349):
//                col_length = $(".item.active .couple_thumbnail").length;
//                n = $(".item.active img").length%2 == 0 ? 4 : 2;
//                while (col_length != n) {
//                    $(".item.active .couple_thumbnail:last").remove();
//                    col_length = $(".item.active .couple_thumbnail").length;
//                }
//                break;
//            case (viewport().width >= 1350 && viewport().width <= 1599):
//                col_length = $(".item.active .couple_thumbnail").length;
//                couple = $($.parseHTML($("#couple").html()));
//                n = $(".item.active img").length%2 == 0 ? 5 : 3;
//                while (col_length != n) {
//                    i = 2;
//                    couple.find("img").each(function() {
//                        $(this).attr('src', images[$.inArray($(".item.active .couple_thumbnail:last").find("img").first().attr('src'), images) + i]);
//                        img_number = $.inArray($(this).attr('src'), images);
//                        $(this).next(".carousel-caption").find("h6").text("Image #" + img_number);
//                        i++;
//                    });
//                    col_length > n ? $(".item.active .couple_thumbnail:last").remove() : $(".item.active").append(couple);
//                    col_length = $(".item.active .couple_thumbnail").length;
//                }
//                break;
//            case (viewport().width >= 1600):
//                couple = $($.parseHTML($("#couple").html()));
//                col_length = $(".item.active .couple_thumbnail").length;
//                n = $(".item.active img").length%2 == 0 ? 6 : 4;
//                if (col_length < n) {
//                    i = 2;
//                    couple.find("img").each(function() {
//                        $(this).attr('src', images[$.inArray($(".item.active .couple_thumbnail:last").find("img").first().attr('src'), images) + i]);
//                        img_number = $.inArray($(this).attr('src'), images);
//                        $(this).next(".carousel-caption").find("h6").text("Image #" + img_number);
//                        i++;
//                    });
//                    $(".item.active").append(couple);
//                }
//                break;
//        }
//    });
//
//    for (i = 0; i < $(".item.active img").length; i++) {
//        img = $(".item.active img").eq(i);
//        img.attr('src', images[i]);
//        img_number = $.inArray(img.attr('src'), images);
//        img.next(".carousel-caption").find("h6").text("Image #" + img_number)
//    }
//
//    right_arrow.click(function() {
//
//        slide = $($.parseHTML($("#slide").html()));
//        col_length = $(".item.active .couple_thumbnail").length;
//        n = $.inArray($(".item.active img:first").attr('src'), images) == 0 ? col_length + 2 : col_length;
//        while (slide.find(".couple_thumbnail").length != n) {
//            slide.find(".couple_thumbnail:last").remove();
//        }
//        var img_last_num = $.inArray($(".item.active img:last").attr('src'), images);
//        var img_first = 1;
//
//        for (i = 0; i < slide.find("img").length; i++) {
//            img = slide.find("img").eq(i);
//            img_num = i+img_last_num + 1 < images.length ? i+img_last_num+1 : img_first;
//            img.attr('src', images[img_num]);
//            img_number = $.inArray(img.attr('src'), images);
//            img.next(".carousel-caption").find("h6").text("Image #" + img_number);
//            img_num == img_first ? img_first++ : '';
//            if (img_last_num + i + 1 > images.length) {
//                right_arrow.addClass("hide");
//            }
//        }
//
//        $(".carousel-inner").append(slide);
//
//        $('#myCarousel').on('slid.bs.carousel', function () {
//            left_arrow.removeClass("hide");
//            $(".item.active").prev().remove();
//        });
//        if (img_last_num + $(".item.active img").length + 1 > images.length) {
//            right_arrow.addClass("hide");
//        }
//    });
//
//    left_arrow.click(function() {
//
//        slide = $($.parseHTML($("#slide").html()));
//        col_length = $(".item.active .couple_thumbnail").length;
//
//        var big_thumbnail = $($.parseHTML($("#big_thumbnail").html())),
//            img_first_num = $.inArray($(".item.active img:first").attr('src'), images),
//            loop_length = $(".item.active img").length;
//
//        while (slide.find(".couple_thumbnail").length != col_length) {
//            slide.find(".couple_thumbnail:last").remove();
//        }
//
//        right_arrow.removeClass("hide");
//
//        if (false) {
//
//            var first_slide = slide;
//            first_slide.find(".couple_thumbnail:lt(2)").remove();
//            first_slide.prepend(big_thumbnail);
//
//            first_slide.find(".big_thumbnail img").attr('src', images[0]);
//            first_slide.find(".big_thumbnail img").next(".carousel-caption").find("h6").text("Image #" + 0);
//
//            for (i=0; i < first_slide.find(".couple_thumbnail img").length; i++) {
//                img = first_slide.find(".couple_thumbnail img").eq(i);
//                img_num = img_first_num - loop_length + i + 4;
//                if (img_num == 0) {img_num = images.length - 1}
//                else if (img_num < 0) {img_num = images.length - 1 + img_num}
//                img.attr('src', images[img_num]);
//                img_number = $.inArray(img.attr('src'), images);
//                img.next(".carousel-caption").find("h6").text("Image #" + img_number)
//            }
//
//            $('#myCarousel').on('slid.bs.carousel', function () {
//                left_arrow.addClass("hide");
//            })
//        }
//        else {
//            for (i = 0; i < loop_length; i++) {
//                img = slide.find("img").eq(i);
//                img_num = img_first_num - loop_length + i;
//                if (img_num == 0) {img_num = images.length - 1}
//                else if (img_num < 0) {img_num = images.length - 1 + img_num}
//                img.attr('src', images[img_num]);
//                img_number = $.inArray(img.attr('src'), images);
//                img.next(".carousel-caption").find("h6").text("Image #" + img_number)
//            }
//        }
//        $(".item.active").before(slide);
//        $("#myCarousel").on('slid.bs.carousel', function () {
//            $(".item.active").next().remove();
//        })
//    });
//
//});