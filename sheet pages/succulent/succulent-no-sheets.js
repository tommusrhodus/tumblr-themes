
$(document).ready( function(){ 
//feather icons
feather.replace();


    buildLayout();


function buildLayout() {

   

    //resizeGrid on load
    resizeGrid();

    //initialise isotope
    const $grid = $('#grid').isotope({
        itemSelector: '.card',
    });

    $('nav a').on('click', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
        e.preventDefault();
    });


 
}
function resizeGrid() {
    const winWidth = $('main').innerWidth() - 70;
    const cardWidth = $('.card').outerWidth() + 30;
    const colNum = Math.floor(winWidth / cardWidth);

    if (colNum > 1) {
        $('#grid').css({
            'width': cardWidth * colNum
        });
        $('.card').css({
            'margin': '15px'
        });
    } else {
        $('#grid').css({
            'width': cardWidth - 30
        });
        $('.card').css({
            'margin': '15px 0'
        });
    }
}

//resizeGrid on window resize
(function() { // closure to avoid global variable
    var timeoutResize;
    $(window).on('resize', function() {
        clearTimeout(timeoutResize);
        timeoutResize = setTimeout(function() {
            resizeGrid();
        }, 100);
    });
})();

$('body').append(
  '<div id="nnspc" style="position: fixed; bottom: 0; right: 0; padding: 10px; background: #181818; z-index: 9;"><a style="font-family: helvetica; font-weight: bold; letter-spacing: -1px; color: #fff; text-decoration: none;" href="https://nonspace.tumblr.com">nonspace.</a></div>'
);
});