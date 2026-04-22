(function($) {
  
  "use strict";  

  $(window).on('load', function() {

    /* 
   MixitUp
   ========================================================================== */
  $('#portfolio').mixItUp();

  /* 
   One Page Navigation & wow js
   ========================================================================== */
    var OnePNav = $('.onepage-nev');
    var top_offset = OnePNav.height() - -0;
    OnePNav.onePageNav({
      currentClass: 'active',
      scrollOffset: top_offset,
    });
  
  /*Page Loader active
    ========================================================*/
    $('#preloader').fadeOut();

  // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });

    /* slicknav mobile menu active  */
    $('.mobile-menu').slicknav({
        prependTo: '.navbar-header',
        parentTag: 'liner',
        allowParentLinks: true,
        duplicate: true,
        label: '',
        closedSymbol: '<i class="icon-arrow-right"></i>',
        openedSymbol: '<i class="icon-arrow-down"></i>',
      });

      /* WOW Scroll Spy
    ========================================================*/
     var wow = new WOW({
      //disabled for mobile
        mobile: false
    });

    wow.init();

    /* Nivo Lightbox 
    ========================================================*/
    $('.lightbox').nivoLightbox({
        effect: 'fadeScale',
        keyboardNav: true,
      });

    /* Counter
    ========================================================*/
    $('.counterUp1').counterUp({
     delay: 10,
     /* time: 1000 -> erhöht, da z.B. die Zahl "29" NICHT korrekt angezeigt wurde
     sondern nur "28", obwohl der Variablenwert tatsächlich "29" war! */
     time: 1200
    });
	
	$('.counterUp2').counterUp({
     delay: 10,
     time: 2000
    });
	
	$('.counterUp3').counterUp({
     delay: 10,
     time: 2800
    });


    /* Back Top Link active
    ========================================================*/
      var offset = 200;
      var duration = 500;
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
      });

      $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });



  });      

}(jQuery));

/* Erzeugt automatisch immer das korrekte Jahr */
document.getElementById("copyright").innerHTML = "Copyright © " + new Date().getFullYear()+ " by K. Hartmann - All Rights Reserved";

/* Erzeugt automatisch immer die korrekte Anzahl an Jahren Erfahrung */
// ---
// Oben bei Kurzprofil von mir
// So ist es auch nicht verwunderlich das mich auch heute, nach mehr als </p><p id="erfahrung0"></p><p> 25 Jahren, IT-Themen jeglicher Art immer noch begeistern
// document.getElementById("erfahrung0").innerHTML = "So ist es auch nicht verwunderlich das mich auch heute, nach mehr als " + (new Date().getFullYear()-1997) + " Jahren, IT-Themen jeglicher Art immer noch begeistern.";
// ---
// Oben bei Kurzprofil von mir
document.getElementById("erfahrung1").innerHTML = (new Date().getFullYear()-1997) + " Jahre (Privat + Beruflich)";
// Unten bei Countern
document.getElementById("erfahrung2").innerHTML = (new Date().getFullYear()-1997);



/* 

Erzeugt automatisch immer mein korrektes Alter!

In JavaScript werden die Monate von 0-11 dargestellt werden, also Oktober = 9
In JavaScript werden die Tage von 1-31 gezählt

Zuerst wird der aktuelle Monat und der aktuelle Tag geladen, 
dann wird verglichen ob der Monat >= 9 und ob der Tag >= 21 (Mein Geburtstag) ist
und dann entweder Minus 1989 (vor meinem Geburtstag) oder eben Minus 1988 (an/nach meinem Geburtstag) gerechnet.

*/

var monat = new Date().getMonth();
var tage = new Date().getDate();

/* NOT WORKING
if(monat >= 9 && tage >= 21){
    //bevor ich im laufenden Jahr Geburtstag habe
    document.getElementById("alter").innerHTML = (new Date().getFullYear()-1988) + " Jahre";
}else{
    //an bzw. nach dem ich im laufenden Jahr Geburtstag habe
    document.getElementById("alter").innerHTML = (new Date().getFullYear()-1989) + " Jahre";
	console.log("bye")
    }
*/

// ------------------------------------------------------------------------------------------



//wenn es vor Oktober ist...
if(monat < 9){document.getElementById("alter").innerHTML = (new Date().getFullYear()-1989) + " Jahre";}
//wenn es Oktober ist, aber noch vor dem 21ten...
else if (monat == 9 && tage < 21){document.getElementById("alter").innerHTML = (new Date().getFullYear()-1989) + " Jahre";}
//wenn es der 21.10. oder später im Oktober ist...
if(monat == 9 && tage >= 21){document.getElementById("alter").innerHTML = (new Date().getFullYear()-1988) + " Jahre";}
//wenn es nach Oktober ist...
else if(monat > 9){document.getElementById("alter").innerHTML = (new Date().getFullYear()-1988) + " Jahre";}
