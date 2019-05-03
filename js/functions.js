// A $( document ).ready() block.
$( document ).ready(function() {
  $("#header-copy").hide();


$(window).scroll(function(){
  $("#header-copy").show(500);


  var wScroll = $(this).scrollTop();
  var Scroll = $(window).scrollTop();

  $('.paralax-clock').css({
    'transform' : 'translate(0px, '+ wScroll /38 +'%)'
  });

  $('.paralax-comments').css({
    'transform' : 'translate(0px, '+ wScroll /40 +'%)'
  });

  $('.paralax-cal').css({
    'transform' : 'translate(0px, -'+ wScroll /10 +'%)'
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