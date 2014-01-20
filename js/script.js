/**
 * Created with JetBrains WebStorm.
 * User: AlexBodnya
 * Date: 11/26/13
 * Time: 4:58 PM
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function () {
//    Create image array
        var arrayOfImages = [],
            shift = 0,
            num = 0,
            $slider = $('#slider');

//        Hide "previous slider" arrow
        $('.nav-left').css("display", "none");

//        Array of images
        for (var i = 0; i < 19; i++) {
            arrayOfImages[i] = new Image();
            arrayOfImages[i].src = "img/" + i + ".jpg";
        }

//    Create slider's field
        var SliderContent = function (start, end, shift) {
            $('.slider').html('');
            if (shift == 0) {
                var $div2 = $('<div class="column column-2">');
                $('.slider').append($div2);
                for (var i = start; i < end - 4; i += 2) {
                    var $div1 = $('<div class="column column-1">'),
                        $divRow1 = $('<div class="row">'),
                        $divRow2 = $('<div class="row">');
                    $('.slider').append($div1);
                    $div1.append($divRow1);
                    $div1.append($divRow2);
                }
            }
            if (shift != 0) {
                for (var i = start; i < end; i += 2) {
                    var $div1 = $('<div class="column column-1">'),
                        $divRow1 = $('<div class="row">'),
                        $divRow2 = $('<div class="row">');
                    $('.slider').append($div1);
                    $div1.append($divRow1);
                    $div1.append($divRow2);
                }
            }
        };

//    Create images content
        var NewImages = function (start, end, shift) {
            var $row = document.querySelectorAll('.row');
            var $div2 = document.querySelectorAll('.column-2');
            if (shift == 0) {
                $($div2).html(arrayOfImages[0]);
                for (var i = start, j = 0; i <= end - 4, j < $row.length; i++, j++) {
                    $($row[j]).html(arrayOfImages[i]);
                    $('img').addClass('image');
                }
            }
            if (shift != 0) {
                for (var i = start, j = 0; i <= end, j < $row.length; i++, j++) {
                    $($row[j]).html(arrayOfImages[i]);
                    $('img').addClass('image');
                }
            }
            for (var i = start; i < end; i++) {
                if (end >= arrayOfImages.length + 3)
                    $('.nav-right').css("display", "none");
                if (end < arrayOfImages.length + 3)
                    $('.nav-right').css("display", "block");
            }
        };

//      Current width
        var $currWidth = parseInt($('.container').css("width"));

        if ($currWidth >= 1520) {
            num = 6;
            $($slider)
                .html(SliderContent(0, num * 2, shift))
                .html(NewImages(1, num * 2, shift));
        }
        if ($currWidth >= 1280 && $currWidth < 1520) {
            num = 5;
            $($slider)
                .html(SliderContent(0, num * 2, shift))
                .html(NewImages(1, num * 2, shift));
        }
        if ($currWidth <= 1280) {
            num = 4;
            $($slider)
                .html(SliderContent(0, num * 2, shift))
                .html(NewImages(1, num * 2, shift));
        }

//        Next slider
        $(document).on("click", ".nav-right", function () {
            shift += num;
            if (shift != 0)
                $('.nav-left').css("display", "block");
            $($slider).fadeOut(200, function () {
                $('.column-1').remove();
                $($slider)
                    .html(SliderContent(0, num * 2, shift))
                    .html(NewImages(shift * 2 - 3, shift * 2 + num * 2, shift))
            });
            $($slider).fadeIn(200);
        });

//        Previous slider
        $(document).on("click", ".nav-left", function () {
            if (shift == 0) {
                $('.nav-left').css("display", "none");
                return false;
            }
            else {
                if (((shift % num == 3) && (shift != 3)) || ((shift % num == 2) && (shift != 2)) || ((shift % num == 1)
                    && (shift == 9)) || ((shift == 10) && (shift % num == 4)) || (shift % num == 0)) {
                    shift -= num;
                    if (shift <= 0)
                        $('.nav-left').css("display", "none");
                    $($slider).fadeOut(200, function () {
                        $('.column-1').remove();
                        if (shift == 0) {
                            $($slider)
                                .html(SliderContent(0, num * 2, shift))
                                .html(NewImages(shift * 2 + 1, shift * 2 + num * 2, shift));
                        }
                        if (shift != 0) {
                            $($slider)
                                .html(SliderContent(0, num * 2, shift))
                                .html(NewImages(shift * 2 - 3, shift * 2 + num * 2, shift));
                        }
                    });
                }
                else {
                    shift = 0;
                    $('.nav-left').css("display", "none");
                    $($slider).fadeOut(200, function () {
                        $($slider)
                            .html(SliderContent(0, num * 2, shift))
                            .html(NewImages(1, num * 2, shift));
                    });
                }
            }
            $($slider).fadeIn(200);
        });

//      Change slider on resize
        $(window).resize(function () {
            $currWidth = parseInt($('.container').css("width"));
            if (shift == 0) {
                if ($currWidth >= 1520) {
                    num = 6;
                    $($slider)
                        .html(SliderContent(0, num * 2, shift))
                        .html(NewImages(shift * 2 + 1, shift * 2 + num * 2, shift));
                }
                if ($currWidth >= 1280 && $currWidth < 1520) {
                    num = 5;
                    $($slider)
                        .html(SliderContent(0, num * 2, shift))
                        .html(NewImages(shift * 2 + 1, shift * 2 + num * 2 + 2, shift));
                }
                if ($currWidth < 1280) {
                    num = 4;
                    $($slider)
                        .html(SliderContent(0, num * 2, shift))
                        .html(NewImages(shift * 2 + 1, shift * 2 + num * 2, shift));
                }
            }
            else {
                if ($currWidth >= 1520) {
                    num = 6;
                    $($slider)
                        .html(SliderContent(0, num * 2, shift))
                        .html(NewImages(shift * 2 - 3, shift * 2 + num * 2, shift));
                }
                if ($currWidth >= 1280 && $currWidth < 1520) {
                    num = 5;
                    $($slider)
                        .html(SliderContent(0, num * 2, shift))
                        .html(NewImages(shift * 2 - 3, shift * 2 + num * 2 + 2, shift));
                }
                if ($currWidth < 1280) {
                    num = 4;
                    $($slider)
                        .html(SliderContent(0, num * 2, shift))
                        .html(NewImages(shift * 2 - 3, shift * 2 + num * 2, shift));
                }
            }
        });
    }
);