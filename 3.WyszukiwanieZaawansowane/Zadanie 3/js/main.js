/*

Zadanie 3. Otwórz zadanie
http://jsfiddle.net/CodersLab/u7fj1jek/
    i napisz następującą funkcję, która:
- po kliknięciu w przycisk rozwiń, rozwinie opis filmu,
    - po kliknięciu w przycisk zamknij, zwinie opis filmu (tylko ten,
    który chcemy zwinąć, nie wszystkie),
- zmodyfikuj kod tak, aby po kliknięciu w zamknij, zwijały się wszystkie
*/



$(function () {

    $("h2").on('click',function (event) {
        event.preventDefault();
//        $(this).siblings().fadeIn(200);
        $(this).siblings().show();
    });



/*    $(".close").on('click',function (event) { // zamykanie tylko danego "this" nadrzędnego elementu .container klasy
        event.preventDefault();
//        $(this).parent().fadeOut(200);
        $(this).parent().hide();
    });*/


    $(".close").on('click',function (event) {
        event.preventDefault();
//        $(this).parent().fadeOut(200);
        $(".container").hide();
    });

});