/*
 Zadanie 2. Ustaw każdy z 3 button-ów pod inną zmienną. Następnie:
 - dla elementu pierwszego ustaw event click, który  po kliknięciu
 wyświetli w consoli napis (kliknięto mnie)
 - dla elementu drugiego ustaw event click,
 który po kliknięciu wyświetli w consoli napis (kliknięto mnie,
 ale już się drugi raz nie dam kliknąć)
 - dla trzeciego wywołaj metodę off, która odczepi wszystkie eventy
 z poprzednich butonów.
 */


$(function() {

    var button1=$('button:nth-of-type(1)');
    var button2=$('button:nth-of-type(2)');
    var button3=$('button:nth-of-type(3)');

    button1.on('click', function (event) {
        alert('kliknięto mnie!');

    });

    button2.one('click', function (event) {
        alert('kliknięto mnie raz!');
    });


    button3.on('click', function (event) {
        button1.off('click');
        button2.off('click');

        alert('Wyłączono 1 i 2 !');
    });

});