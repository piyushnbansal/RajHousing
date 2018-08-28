$(document).ready(function(){
	$('#footer').load('footer.html');
    $('.sidenav').sidenav();
    $('#floor-plans .carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });
    $('#project-images .carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });
    $('.modal').modal();

    var carousel_width = $('.carousel').width();
    carousel_width = 0.56 * parseInt(carousel_width);
    console.log(carousel_width);
    // $('.carousel-item').css('height', (0.56 * carousel_width) + 'px !important');
    $('.dummy').append(`
        <style>
            .carousel {
                height: ${carousel_width}px !important;
            }
        </style>
    `)
});

var floor_timer;
var project_timer;

var checkScrollBars = function(){
    var b = $('body');
    var normalw = 0;
    var scrollw = 0;
    if(b.prop('scrollHeight')>b.height()){
        normalw = window.innerWidth;
        scrollw = normalw - b.width();
        $('.sidenav li').css({paddingRight:scrollw+'px'});
    }
}

function init(){
    floor_timer = setInterval( function(){
        $('#floor-plans .carousel.carousel-slider').carousel('next');
    }, 6000);
    // $('#floor-plans').mouseover(function() {
    //     clearInterval(floor_timer);
    // });
    // $('#floor-plans').mouseout(function() {
    //     clearInterval(floor_timer);
    //     $('#floor-plans .carousel.carousel-slider').carousel('next');
    //     floor_timer = setInterval( function(){
    //         $('#floor-plans .carousel.carousel-slider').carousel('next');
    //     }, 2000);
    // });

    project_timer = setInterval( function(){
        $('#project-images .carousel.carousel-slider').carousel('next');
    }, 6000);
    // $('#project-images').mouseover(function() {
    //     clearInterval(project_timer);
    // });
    // $('#project-images').mouseout(function() {
    //     clearInterval(project_timer);
    //     $('#project-images .carousel.carousel-slider').carousel('next');
    //     project_timer = setInterval( function(){
    //         $('#project-images .carousel.carousel-slider').carousel('next');
    //     }, 2000);
    // });

    checkScrollBars();
}