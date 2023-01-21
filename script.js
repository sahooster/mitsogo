// $(document).ready(function () {
//     $('#searchAppear').hide()
// })
// $(document).ready(function () {
//     $('#search-icon').click(function () {
//         $('#searchAppear').toggle()
//     })
// })

function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
  }
  
  function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
  }




// owl


$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
})





//two
$(document).ready(function () {

    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoWidth: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

});


$(".firstowl").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoWidth: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});
