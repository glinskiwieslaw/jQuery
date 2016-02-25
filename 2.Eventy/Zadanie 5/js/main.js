/*
 Zadanie 5. Otwórz plik http://jsfiddle.net/CodersLab/on9a2k7x/
 Następnie wykonaj kroki:
 - ustaw lekki cień wewnętrzny po kliknięciu wewnątrz inputa
 - zmień background-color na szary po wyjściu kursorem z pola input

 */


$(function () {


        $('input').on('click', function (event) {
          console.log('kliknięto mnie!');
        $(this).css({
            boxShadow: "5px 5px 10px #EC1E40" // ustawienie cienia box-shadow: none|h-shadow v-shadow blur spread color
        });


        $('input').on('mouseleave', function (event) {
          console.log('kliknięto mdasdsanie!');
          $(this).css(
              {
                 backgroundColor: "gray",
                 fontWeight: "700"
              });

        });

    });
});

