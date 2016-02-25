/*

Zadanie 1. Otwórz projekt ‘zadanie-jquery2’. Po kliknięciu
w element menu zmień kolor klikniętego elementu.
    Tylko klikniętego, nie wszystkie.

*/


$(function() {

    $(".menu").find('A').click(function(event) {
        event.preventDefault();
        $(this).css('color', 'red');

    });

});