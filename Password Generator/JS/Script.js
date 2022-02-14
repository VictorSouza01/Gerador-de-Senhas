function MudarNum(){
    var qtd = document.getElementById("RangeNum").value;
    var qtdT = document.getElementById("qtd").value;
    qtdT=qtd;
    qtd=qtdT;
    document.getElementById("qtd").value = qtd;

    if (qtd>=20){
        qtdT = document.getElementById("qtd").style.border = "2px solid green"
    }
    else if(qtd >= 16){
        qtdT = document.getElementById("qtd").style.border = "2px solid yellow"
    }
    else if(qtd >= 10){
        qtdT = document.getElementById("qtd").style.border = "2px solid white"
    }
    else{
        qtdT = document.getElementById("qtd").style.border = "2px solid red"
    }
}
function Copiar(){
    var senha = document.getElementById("txt_senha").value;
    navigator.clipboard.writeText(senha);
}

function GerarSENHA(){
    var chars;
    var qtdR = document.getElementById("qtd").value;
    var passwordLength = qtdR;
    var password = "";

    if (qtdR>=20){
        document.getElementById('txt_senha').style.color = "green"
    }
    else if(qtdR >= 16){
        document.getElementById('txt_senha').style.color = "yellow"    
    }
    else if(qtdR >= 10){
        document.getElementById('txt_senha').style.color = "white"
    }
    else{
        document.getElementById('txt_senha').style.color = "red"
    }

    if (document.getElementById("Numeros").checked == true){
        chars = "0123456789"
    }
    else if(document.getElementById("caracteresS").checked == true){
        chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]"
    }
    else if (document.getElementById("letras").checked == true){
        chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ"
    }
    else if(document.getElementById("tudo").checked == true){
        chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]"
    }
    else{
        alert("SELECIONE UM MÉTODO")
    }
    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
      }
      document.getElementById('txt_senha').value = password
}
