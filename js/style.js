(function ($) {
  var typed = new Typed('span.txt-rotate', {
    strings: ["Patricia"," Web Developer","Freelancer"],
    typeSpeed: 100,
    backSpeed: 100,
    fadeOut: false,
    smartBackspace: true,
    loop: true
  });
})(jQuery);




 

 $(document).ready(function () {
 
  $(window).on('scroll',function(){
    
    if ($(window).scrollTop()>400){
    $('nav').addClass('shrink');
   
  }else{
    $('nav').removeClass('shrink');
     $('nav').addClass('top');
  }

  });

 
  }); 
var nave=document.querySelector("button");
nave.addEventListener('click',function () {
  console.log('me diste un click');
});
