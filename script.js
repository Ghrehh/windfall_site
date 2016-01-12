$(document).ready(function(){
  
  var music_anchor = $('.music-anchor').offset();
  var info_anchor = $('.info-anchor').offset();
  var gigs_anchor = $('.gigs-anchor').offset();
  var contact_anchor = $('.contact-anchor').offset();
  
  var topPosition = -30;
  var not_scrolled_down = true; //keeps track of wether the top bar has animated down
  var scrolling_up = false; //stops the slideing up animation playing multiple times
  
  var isDesktop = (function() {
    return !('ontouchstart' in window) // works on most browsers 
    || !('onmsgesturechange' in window); // works on ie10
   })();
  
  
  $(".music-button").click(function(){
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
  
  
  
  var topSlideDown = function() {
    if (topPosition  < 0) {
      topPosition += 1;
      $(".fixed").css({ top: topPosition });

      setTimeout(function(){
        topSlideDown();
      }, 10);
    }
  };
  var topSlideUp = function() {
    if (topPosition  > -30) {
      topPosition -= 1;
      $(".fixed").css({ top: topPosition });

      setTimeout(function(){
        topSlideUp();
      }, 10);
    }
    else {
      not_scrolled_down = true;
      scrolling_up = false;
      console.log("scrolled_up")
    }
  };
  
  //PARALLAX SCROLL
  $(document).scroll(function(){
    $("body").css({backgroundPosition: "0px -" + String($(document).scrollTop() / 10) + "px"})
    $(".screen-3").css({backgroundPosition: "0px -" + String($(document).scrollTop() / 2 / 10) + "px"})
    $(".person-container").css({backgroundPosition: "0px -" + String($(document).scrollTop() / 1.5 / 10) + "px"})
    
    if (isDesktop){
      if ($(document).scrollTop() < 804 && not_scrolled_down == false && scrolling_up == false && topPosition == 0) {
        scrolling_up = true;
        topSlideUp()
      }
      
      if ($(document).scrollTop() > 804 && not_scrolled_down == true && topPosition == -30) {
        not_scrolled_down = false;
        topSlideDown()
      }
    }
  });
  
  
  // FOR BIO PICTURES AND CLOSING THEM
  var current_bio = "";
  var profile_selected = false;
  
  $(".nathan").click(function(){
    if (profile_selected == false) {
      current_bio = "nathan";
      profile_selected = true;
      
      $(".info-screen").fadeOut(function(){
        $(".nathan-container").fadeIn();
      });
      
      $(".info-title").fadeOut(function(){
        $(".nathan-title").fadeIn();
      });
    }
    
  });
  
  $(".kacper").click(function(){
    if (profile_selected == false) {
      current_bio = "kacper";
      profile_selected = true;
      
      $(".info-screen").fadeOut(function(){
        $(".kacper-container").fadeIn();
      });
      
      
      $(".info-title").fadeOut(function(){
        $(".kacper-title").fadeIn();
      });
    }
    
  });
  
  $(".gerard").click(function(){
    if (profile_selected == false) {
      current_bio = "gerard";
      profile_selected = true;
      
      $(".info-screen").fadeOut(function(){
        $(".gerard-container").fadeIn();
      });
      
      
      $(".info-title").fadeOut(function(){
        $(".gerard-title").fadeIn();
      });
    }
    
  });
  
  $(".niall").click(function(){
    if (profile_selected == false) {
      current_bio = "niall";
      profile_selected = true;
      
      $(".info-screen").fadeOut(function(){
        $(".niall-container").fadeIn();
      });
      
      
      $(".info-title").fadeOut(function(){
        $(".niall-title").fadeIn();
      });
    }
    
  });
  
  $(".close-person").click(function(){
    $("." + current_bio + "-container").fadeOut(function(){
       $(".info-screen").fadeIn();
    })
    //fading out all four titles at once is a problem so i'll create var holding the current persons name and use it to target the right class
    $("." + current_bio + "-title").fadeOut(function(){
      $(".info-title").fadeIn();
      current_bio = "";
      profile_selected = false
    });
  })

})