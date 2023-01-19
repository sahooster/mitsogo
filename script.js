$(document).ready(function(){
    $('#searchAppear').hide()
})
$(document).ready(function(){
    $('#search-icon').click(function(){
        $('#searchAppear').toggle()
    })
})



// owl

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})