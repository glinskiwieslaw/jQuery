/*Zadanie 1. OtwĂłrz zadanie http://jsfiddle.net/CodersLab/ubrp9ekk/
 pobierz szerokoĹÄ elementu box, nastÄpnie, stwĂłrz nowy element,
 o takiej samej wielkoĹci za pomocÄ JavaScript. */


$(function () {

    $('.box').on('click', function (event) {
    var oldBoxWidth = $('.box').css('width');
//        console.log($('.box').css('background-color'));
        console.log(oldBoxWidth);
        var oldBox = $('.box');

        // var newDiv = $("<div>Text który wyświetlamy</div>");

        var newBox = $("<div class='box1'></div>");
        $('.box1').css({
            "background-color": 'green',
            "width":oldBoxWidth,
            "height": '100px',
            "padding":'10px',
            "margin": '20px',

        })



        oldBox.after(newBox);

//        var newDiv = document.createElement("box");
//        var newBox = newDiv.cloneNode(true);
    });

});