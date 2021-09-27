function configuracaofixo(){ 
    if(fixo.value.length == 0)
        fixo.value = '(' + fixo.value;
    if(fixo.value.length == 3)
        fixo.value = fixo.value + ') ';
    if(fixo.value.length == 9)
        fixo.value = fixo.value + '-';
}

function configuracaocelular(){ 
    if(celular.value.length == 0)
        celular.value = '(' + celular.value;
    if(celular.value.length == 3)
        celular.value = celular.value + ') ';
    if(celular.value.length == 10)
        celular.value = celular.value + '-';
}


function enviar(){
    var r=confirm("Você confirma o envio do formulário?");
}