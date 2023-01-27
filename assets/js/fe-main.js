// JQuery for the frontend website

// (function ($) {
//     jQuery(document).ready(function () {

//     });
// })(jQuery);


document.addEventListener("DOMContentLoaded", function () {
    //Set each Carousels first slide to active
    var carousels = document.querySelectorAll('.wp-block-zenbsblocks-carousel');
    carousels.forEach(function (carousel, index) {
        carousel.querySelector('.carousel-item').classList.add("active");
    });
});
