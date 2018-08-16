$(document).ready(function(){
    $('#hamburger').click(function(e){
        e.preventDefault();
        $('header .navbar ul').toggle(300);
    });
});