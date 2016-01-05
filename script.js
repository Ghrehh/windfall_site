$(document).ready(function(){
  var music_anchor = $('.music-anchor').offset();
  var info_anchor = $('.info-anchor').offset();
  var gigs_anchor = $('.gigs-anchor').offset();
  var contact_anchor = $('.contact-anchor').offset();
  
  
  $(".music-button").click(function(){
    console.log("poo")
    $(window).scrollTop(music_anchor.top);
  });
  $(".info-button").click(function(){
    $(window).scrollTop(info_anchor.top);
  });
  $(".gigs-button").click(function(){
    $(window).scrollTop(gigs_anchor.top);
  });
  $(".contact-button").click(function(){
    $(window).scrollTop(contact_anchor.top);
  });
    

})