/*
 Zadanie 3. Po kliknięciu w element ‘p’ wywołaj funkcję,
 która wyświetli napis w konsoli (kliknięto mnie).
 Spróbuj wywołać tą samą funkcję, którą wywołuje kliknięcie
 buttona pierwszego z poprzedniego zadania.
 */


$(function () {




    $('p').on('click', function (event) {
        console.log('kliknięto mnie!');
    });


    $(".menu").find('li').mouseover(function (event) {
        console.log("Hurra");
    });

});