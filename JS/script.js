//A smooth transition across the page
$(document).ready(function(){
    $(".menuAnchor").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    
    
    //Images-galary
    $(".work-example").magnificPopup({
        type: "image",
        gallery: {
            enabled : true
        },
        image: {
  markup: '<div class="mfp-figure">'+
            '<div class="mfp-close"></div>'+
            '<div class="mfp-img"></div>'+
            '<div class="mfp-bottom-bar">'+
              '<div class="mfp-title"></div>'+
            '<div class="slider-like"><span class="slider-like-text">Понравилась работа? Нажми на тыковку<span><span class="like-link"><span></div>'+
            '</div>'+
          '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

  cursor: 'mfp-zoom-out-cur', // Class that adds zoom cursor, will be added to body. Set to null to disable zoom out cursor.

  titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
  // Or the function that should return the title. For example:
  // titleSrc: function(item) {
  //   return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
  // }

  verticalFit: true, // Fits image in area vertically

  tError: '<a href="%url%">The image</a> could not be loaded.'// Error message
}
        
    });
    
 $('.work-example').on('click', function(){
       $(".like-link").on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active')
            });
 });
    
    //Like-pump
  
});


//The drop-down menu
$(document).ready(function(){
    $('.nav-menu-trigger').on('click', function(e){
  $(this).next().slideToggle(300, function(){
   if($(this).css('display')==='none'){
$(this).removeAttr('style')}
  });
});
    });

//Switching tabs on the portfolio page
$(document).ready(function() {
    $('ul.portfolio-tabs-caption').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.portfolio-tabs').find('div.tabs-content').removeClass('active').eq($(this).index()).addClass('active');
    });
});