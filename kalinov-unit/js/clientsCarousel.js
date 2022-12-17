$(document).ready(function(){

    const owl = $('#clients-slider');
    owl.owlCarousel({
        items: 1,
        loop: true
    });

    const prev = $('#sliderPrev');
    const next = $('#sliderNext');

    prev.click(function(){
        owl.trigger('prev.owl.carousel');
    });

    next.click(function(){
        owl.trigger('next.owl.carousel');
    })

  });