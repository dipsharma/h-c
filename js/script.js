jQuery(document).ready(function(){

  jQuery('.slider-items').slick({
    dots: false,
    infinite: true,
    speed: 3000,
    adaptiveHeight:true,
    fade: false,
    cssEase: 'step-end',
    });
  
    jQuery('.slider-items').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      jQuery(".loader-container").show();
    });

    jQuery('.slider-items').on('afterChange', function(event, slick, currentSlide, nextSlide){
      jQuery(".loader-container").hide();
    });

    // Acordion
    $(".accordion").on("click", ".heading", function() {
        $(this).toggleClass("active").next().slideToggle();
        $(".contents").not($(this).next()).slideUp(300); 
        $(this).siblings().removeClass("active");
    });    
  })