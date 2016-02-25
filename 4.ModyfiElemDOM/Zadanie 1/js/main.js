/*Modyfikowanie elementów DOM

 Zadanie 1. Otwórz zadanie http://jsfiddle.net/CodersLab/on9a2k7x/ ,
 // a następnie napisz funkcję, która:
 a)	Pobierze wartość wpisaną do inputa pierwszego
 b)	Pobierze wartość wpisaną do inputa drugiego
 c)	Wstawi nową osobę do listy (na koniec),
 ustawiając jej wiek jako atrybut data
 d)	Po każdym wstawieniu elementu wywołaj funkcję,
 która będzie ustawiała dany kolor dla elementu li w następujący sposób:
 - zielony dla osób z przedziału ( < 15)
 - niebieski dla osób z przedziału ( 15 – 40 )
 - brązowy dla osób z przedziału ( > 40 )*/


$(function () {

    $('input[type=submit]').on('click', function (event) {
        event.preventDefault();
        var name = $('#addUser').prop('value');
        var age = $('#age').prop('value');
        if ($.isNumeric(age) && age >=0 && age <= 150 ) {
            console.log('1231231231');

            var person = $("<li data-age=" + age + ">" + name + "</li>");

            $('.main').append(person); // dodanie do bezpośredniego (ostatniego) nowego elementu w zmiennej person

        } else {

            alert("Wiek musi być wartością nymeryczną z przedziału od 0 do 150!!!");
        }





//        var lastElement = $('ul:nth-last-of-type(1)'); // znalazłem jako selektor
//        console.log(person);
//        lastElement.after(person);


        var myLi = $("li"); // tablicy przetrzymującej elementy li
        for (var i = 0; i < myLi.length; i++) {
            if ($("ul li:eq(" + i + ")").attr('data-age') < 15) { // ul li:eq(i)  metoda eq zwraca i-ty element tablicy ul!!!
                console.log($("ul li:eq(" + i + ")").attr('data-age'));
                $("ul li:eq(" + i + ")").css('color', 'green');
            }
            else if ($("ul li:eq(" + i + ")").attr('data-age') > 40) {
                $("ul li:eq(" + i + ")").css('color', 'brown');
            }
            else {
                $("ul li:eq(" + i + ")").css('color', 'blue');
            }
        }


    });


});