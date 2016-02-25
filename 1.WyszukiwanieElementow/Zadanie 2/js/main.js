/*
 Zadanie 2. Otwórz projekt ‘zadanie-jquery2’ w WebStormie.
 Za pomocą jQuery:
 a) Spróbuj wyszukać za pomocą jQuery wszystkie linki i ustawić im czerwony kolor za pomocą funkcji css().
 b) Zmodyfikuj kod html i jQuery,aby kolor czerwony miały linki tylko z menu
 c) Ustaw klasę .redLinks w pliku styli (.redLinks { color: red;} )
 i za pomocą addClass nadaj ją elementom li w menu (Zodyfikuj punkt a))
 PAMIĘTAJ! – o sprawdzeniu czy wykonujesz operacje na DOM dopiero po załadowaniu strony.
 */


$(document).ready(function () {
    $(function () {
//  $('a').css('color', 'red'); //a)
//  $('.menu').find('a').css('color', 'red'); // b)
        $('a').addClass('redLinks'); // c)

    });
});