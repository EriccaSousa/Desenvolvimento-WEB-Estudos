function mudaCor(cor){
   var elemento = document.getElementById("mensagem");

   elemento.style.color = cor;
}

function valida(){
    var nome = document.getElementById("nome");

    if(nome.value == ""){
        alert("Campo Nome vazio!");
    }else{
        alert("Ok!");
    }
}