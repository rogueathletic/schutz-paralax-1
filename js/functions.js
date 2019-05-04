// A $( document ).ready() block.
$( document ).ready(function() {
  $("#header-copy").show(311);
$("#sumit-title").hide();
$("#menu-icon").hide();
$("#log-in").hide();
$("#sign-up").hide();
$(".clock").show();

$(window).scroll(function(){
  $("#log-in").show(411);
  $("#sign-up").show(740);
  $("#sumit-title").show(254);
  $("#menu-icon").show(254);

  var wScroll = $(this).scrollTop();
  var Scroll = $(window).scrollTop();

  $('.paralax-clock').css({
    'transform' : 'translate(0px, -'+ wScroll /1 +'%)'
  });

  $('.paralax-comments').css({
    'transform' : 'translate(0px, -'+ wScroll /4 +'%)'
  });

  $('.paralax-cal').css({
    'transform' : 'translate(0px, -'+ wScroll /10 +'%)'
  });

  $('.paralax-envilope').css({
    'transform' : 'translate(0px, -'+ wScroll /8 +'%)'
  });

  $('.paralax-stars').css({
    'transform' : 'translate(0px, -'+ wScroll /0.3 +'%)'
  });

  $('#paralax-gears').css({
    'transform' : 'translate(0px, -'+ wScroll /0.41 +'%)'
  });


 

  if(wScroll > $('.cta-cards').offset().top - $(window).height()){

    var offset = Math.min(0, wScroll - $('.cta-cards').offset().top +$(window).height() - 475);

    $('.card1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0) +'px)'});

    // $('.card2').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 10) +'px)'});

    $('.card3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0) +'px)'});

  }

  if (Scroll > 450) {
    $("#menu-icon"). css("filter" , "invert(80%)");
  }

  if (Scroll < 450) {
    $("#menu-icon"). css("filter" , "invert(0%)");
  }

  if (Scroll > 640) {
    $("#sumit-title"). css("filter" , "invert(80%)");
  }

  if (Scroll < 640) {
    $("#sumit-title"). css("filter" , "invert(0%)");
  }



});

});

$('button').click(function(){
  console.log("clicked");
});