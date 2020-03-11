function logar(){
    //Declaração de variáveis
    let senha = document.getElementById('txtsenha')
    //conversão de string para numero(type cast)
    let s = Number(senha.value)

    //Condição para login
    if(s != 1973 ){
        alert('verifique a senha e tente novamente.')
    }else{
        location.assign('inicio.html')
    }

}