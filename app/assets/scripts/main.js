global.$ = global.jQuery = global.jquery = require('jquery');
var currentday = 0;

$(document).ready(function() {

    $('body').css("background", 'url("assets/graphics/2016/6-July/background.png")');

    $(".calendar-item").click(function(){
        var classes = $(this).attr("class").split(' ')[1].replace("script", "");

        hideinfo_trigger();
        pickaday(classes);
        $(".full-view").delay("fast").fadeIn();
    });

    $('.info-trigger').click(function(){
        hideinfo_trigger();
        $(".info-view").delay("fast").fadeIn();
    })

    $('.info-close-me').click(function(){
        $(".info-view").delay("fast").fadeOut();
        showinfo_trigger();
    })

    keyfunctions();
});

function pickaday(day){
    //update global day for navigation
    currentday = day;
    console.log(day);

    // resert title, description, et image
    $(".title").html(PT.title[day])
    $(".descrip").html(PT.descrip[day])
    $(".full-view-image img").attr('src', PT.image[day]);
    var linkname = PT.linkname[day];

    // make link, if there's one
    var linksrc = '<a href="'+PT.link[day]+'" target="_blank">'+linkname+' &nbsp <i class="collecticons collecticons-expand-top-right"></i></a>';

    if(PT.link[day] != ""){
        $(".descrip-link").html(linksrc);            
    }else{
        $(".descrip-link").html("");            
    };
}

function hideinfo_trigger(){
    $('.info-trigger').delay(0).fadeOut();
}

function showinfo_trigger(){
    $('.info-trigger').delay(1000).fadeIn();
}

function keyfunctions(){
    $(document).keyup(function(e) {
        switch(e.keyCode)  {
          // Right
          case 27:
            $(".full-view").delay("slow").fadeOut();
            $(".info-view").delay("fast").fadeOut();
            showinfo_trigger();
            break;

          case 37:
            var yesterday = parseInt(currentday) - 1;

            $('.left-key')
                .css("color", "#e5c53e")
                .css("margin-top", "4px");

            pickaday(yesterday)

            setTimeout(leftreturncss, 400);

            function leftreturncss(){
            $('.left-key')
                .css("color", "")
                .css("margin-top", "");                
            }
            break;

          case 39:
            var tomorrow = parseInt(currentday) + 1;

            $('.right-key')
                .css("color", "#e5c53e")
                .css("margin-top", "4px");

            pickaday(tomorrow)

            setTimeout(rightreturncss, 400);

            function rightreturncss(){
            $('.right-key')
                .css("color", "")
                .css("margin-top", "");                
            }
          break;

        }
    });

    $(".close-me").click(function(){
        $(".full-view").delay("slow").fadeOut();
        showinfo_trigger();
    });

    $(".full-view-targetarea").click(function(){
        $(".full-view").delay("slow").fadeOut();
        showinfo_trigger();
    });

    $(".left-key").click(function(){
        var yesterday = parseInt(currentday) - 1;
        pickaday(yesterday)
    });
    $(".right-key").click(function(){
        var yesterday = parseInt(currentday) + 1;
        pickaday(yesterday)
    });
};