$(document).ready(function(){
    $('#button-mobile').on('click' , function () {
        $('.mobile-menu').toggleClass('active');
        $('#button-mobile').find('i').toggleClass('fa-x');
    });
});