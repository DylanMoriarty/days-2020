global.$ = global.jQuery = global.jquery = require('jquery');
var currentday = PT.image.length - 1;

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
    var translation = PT.image.length - day - 1;

    // resert title, description, et image
    $(".title").html(PT.title[translation])
    $(".descrip").html(PT.descrip[translation])
    $(".full-view-image img").attr('src', PT.image[translation]);
    var linkname = PT.linkname[translation];

    // make link, if there's one
    var linksrc = '<a href="'+PT.link[translation]+'" target="_blank">'+linkname+' &nbsp <i class="collecticons collecticons-expand-top-right"></i></a>';

    if(PT.link[translation] != ""){
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
            $('.left-key')
                .css("color", "#e5c53e")
                .css("margin-top", "4px");
            
            tomorrow(currentday);

            setTimeout(leftreturncss, 400);

            function leftreturncss(){
            $('.left-key')
                .css("color", "")
                .css("margin-top", "");                
            }
            break;

          case 39:
            $('.right-key')
                .css("color", "#e5c53e")
                .css("margin-top", "4px");

            yesterday(currentday)

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
        tomorrow(currentday);
        pickaday(yesterday);
    });
    $(".right-key").click(function(){
        yesterday(currentday);
        pickaday(tomorrow);
    });
};


function yesterday(day){
    if(day > 0){
        var yesterday = parseInt(day) - 1;
    }else{
        var yesterday = 0
        console.log("I have not the time nor the will to document every day of my past.")
    };
    pickaday(yesterday);
}

function tomorrow(day){
    var present = PT.image.length - 1;

    if(day < present){
        var tomorrow = parseInt(day) + 1;
    }else{
        var tomorrow = present;
        console.log("There is no tomorrow :(")
    };
    pickaday(tomorrow);
}