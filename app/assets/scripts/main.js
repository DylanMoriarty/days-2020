global.$ = global.jQuery = global.jquery = require('jquery');
var currentday = 0;

$(document).ready(function() {

    $(".calendar-item").click(function(){
        var classes = $(this).attr("class").split(' ')[1].replace("script", "");

        pickaday(classes);
        $(".full-view").delay("fast").fadeIn();
    });

    $(document).keyup(function(e) {
        switch(e.keyCode)  {
          // Right
          case 37:
            var yesterday = parseInt(currentday) - 1;
            pickaday(yesterday)
            break;
          case 39:
            var tomorrow = parseInt(currentday) + 1;
            pickaday(tomorrow)
          break;
        }
    });

    $(".close-me").click(function(){
        $(".full-view").delay("slow").fadeOut();
    });

    $(".full-view").click(function(){
        $(".full-view").delay("slow").fadeOut();
    });

});

function pickaday(day){
    //update global day for navigation
    currentday = day;
    console.log(day);

    // resert title, description, et image
    $(".title").html(PT.title[day])
    $(".descrip").html(PT.descrip[day])
    $(".full-view-image img").attr('src', PT.image[day]);

    // make link, if there's one
    var linksrc = '<a href="'+PT.link[day]+'" target="_blank">This Link</a>';

    if(PT.link[day] != ""){
        $(".descrip-link").html(linksrc);            
    }else{
        $(".descrip-link").html("");            
    };
}

