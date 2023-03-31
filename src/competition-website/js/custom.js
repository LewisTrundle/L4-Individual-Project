// carousel 

$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        420: {
            items: 2
        },
        1000: {
            items: 5
        }
    }

});

// navbar 

var nav = $("#navbarSupportedContent .navbar-nav  ");
var btn = $(".custom_menu-btn");
btn.click
btn.click(function (e) {

    e.preventDefault();
    nav.toggleClass("lg_nav-toggle");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style")
});

// carousel indicators
$('.carousel').on('slid.bs.carousel', function () {
    $(".indicator-2 li").removeClass("active");
    indicators = $(".carousel-indicators li.active").data("slide-to");
    a = $(".indicator-2").find("[data-slide-to='" + indicators + "']").addClass("active");
    console.log(indicators);

})