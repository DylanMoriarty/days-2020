global.$ = global.jQuery = global.jquery = require('jquery');

$(document).ready(function() {
    $(".calendar-item").click(function(){
        // Fetch background img source
        var bg = $(this).css("background-image")
        bg = bg.replace(/.*\s?url\([\'\"]?/, '').replace(/[\'\"]?\).*/, '')

        $(".full-view-image")
            .css("background", "url("+bg+") no-repeat center");

        $(".full-view").delay("fast").fadeIn();
    });

    $(".close-me").click(function(){
        $(".full-view").delay("slow").fadeOut();
    });

    $(".full-view").click(function(){
        $(".full-view").delay("slow").fadeOut();
    });
});
