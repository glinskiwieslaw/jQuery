/*Zadanie 1. W projekcie ‘zadanie-jquery2’ stwórz funkcję,
 która będzie obsługiwała następującą sytuację  po najechaniu
 na przycisk Choose Plan:
 -  nada tło w kolorze szarym całemu elementowi PlanPricing
 -  powiększy czcionkę TYLKO w opisie planu,
 -  pokaże element z klasą price (
 który ma domyślnie ustawiony display: none)
 (Wykorzystaj znane funkcje do animacji)*/


$(function () {


    $(".btn").on('mouseover',function (event) {
        $(this).parents('.PlanPricing').css('background-color', 'grey');
        $(this).parent().prev().css(
            {
                'font-size': '250%',
                'color': 'blue',
            });
        $(this).parents('.PlanPricing').children('.planName').children('.price').fadeIn(2000);
//        $(this).parents('.PlanPricing').children('.planName').children('.price').show();

    });

});