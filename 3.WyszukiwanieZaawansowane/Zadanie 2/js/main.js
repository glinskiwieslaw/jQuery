/*
 Zadanie 2. Otwórz zadanie http://jsfiddle.net/CodersLab/qo12myfo/
 // i napisz następującą funkcję, która:
 - Po kliknięciu w przycisk ‘Dodaj’, ustawi mu klasę ‘added’,
 oraz pojedynczemu elementowi zawierającemu produkt zmieni obramowanie
 na zielone.
 - po ponownym kliknięciu zresetuje ustawienia elementu cart-item


 */



$(function () {

    $("button").on('click',function (event) {
        $(this).toggleClass('added');
        $(this).parents('.cart-item').toggleClass('cart-updated');
    });

});