/*
 Zadanie 2. Otwórz zadanie http://jsfiddle.net/CodersLab/xvb2mgLu/ .
 Za pomocą poznanych funkcji dodaj następująco elementy span.
 W każde miejsce … wstaw nazwę funkcji jakiej używasz np.: J
 estem tutaj append

 */


$(function () {


    $(document.body).on('click', function (event) {
        var n = $("span").length + 1;
        var newElement = $("<span>" + n + " Jestem tutaj</span>");


        console.log('Kliknieto mnie ' +n + 'razy');
        $('body').append(newElement)    ;

//        $( "body" ).wrap( "<div class='new'>sasdsadasdsa</div>" );

//        document.body.appendChild(newElement);
    });


});