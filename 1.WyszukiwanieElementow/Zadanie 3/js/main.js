//Zadanie 3. Na stronie http://jsfiddle.net/CodersLab/xccrud82/
//// stwórz w css trzy nowe klasy :
//Ustaw każdemu elementowi li (tylko tych w elemencie section class=’main’) te dwie klasy.
//(łącznie z poprzednią klasą borderClass)
//Ustaw także dla tych elementów funkcję fadeOut
//z bardzo wolnym zanikaniem oraz funkcje fadeIn z bardzo wolnym pojawianiem się.
//    Czy widzisz nadmiarowość w swoim kodzie?

    $("document").ready(

    function()
    {
        $('.main').find('li').addClass('borderClass');
        $('.main').find('li').addClass('fontColor');
        $('.main').find('li').addClass('backgroundColor');
        $('.main').find('li').fadeOut(2000);
        $('.main').find('li').fadeIn(2000);
    });

