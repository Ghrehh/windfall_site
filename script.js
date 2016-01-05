

$(document).ready(function(){
  var music_anchor = $('.music_anchor').offset();
  var info_anchor = $('.info_anchor').offset();
  var gigs_anchor = $('.gigs_anchor').offset();
  var contact_anchor = $('.contact_anchor').offset();
  
  
  $("#music-button").click(function(){
    $(window).scrollTop(music_anchor.top);
  });
  $("#info-button").click(function(){
    $(window).scrollTop(info_anchor.top);
  });
  $("#gigs-button").click(function(){
    $(window).scrollTop(gigs_anchor.top);
  });
  $("#contact-button").click(function(){
    $(window).scrollTop(contact_anchor.top);
  });
    

})