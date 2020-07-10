//$(select).ação();

//Documento carregado? Se sim roda a function.
//Click: chama uma função através de click.
//hide: esconde.
$(function(){
    $('#btnEsconder').click(function(){
        $('#esconder').hide();
    });
});

$(function(){
    $('#btnCor').click(function(){
        $('#mudarCor').css("color", "red");
    });
});

$(function(){
    $('#azul').click(function(){
        $('p').css("color", "blue");
    });

   $('#vermelho').click(function(){
       $('p').css("color", "red");
   });
});