
jQuery(document).ready(function($) {  
$(window).scroll(function(){
    if  ($(window).scrollTop() > 300)
        $('#letters').animate({'left':'0px'},1000);
        else
        $('#letters').stop(true).animate({'left':'530px'},500);   
    });
    });
