function jokenpo() {
    
    var escolhaUsuario = parseInt(document.getElementById('cEscolha').value);

    var escolhaMaquina = Math.random()*(4-1)+1;
    var escolhaMaquinaTraduzida = parseInt(escolhaMaquina);    
    var escolhaMaquinaTexto = "Escolha maquina"; 
        
    if(escolhaMaquinaTraduzida == 1){
        escolhaMaquinaTexto ="Pedra" ;
    }
    if(escolhaMaquinaTraduzida == 2){
        escolhaMaquinaTexto = "Papel" ;
    }
    if(escolhaMaquinaTraduzida == 3){
        escolhaMaquinaTexto = "Tesoura";
    }

    var resultado = "Esperando a escolha"
    if(escolhaUsuario == escolhaMaquinaTraduzida){
        resultado = "! Deu empate, vamos novamente?";
    } else{
        if(escolhaUsuario == 1){
            if(escolhaMaquinaTraduzida == 2){     
                resultado = " Que pena! Você perdeu :(";  
            }else{         
                resultado = " Parabéns, você ganhou!!";
            }
        }
        if(escolhaUsuario == 2){
            if(escolhaMaquinaTraduzida == 3){     
                resultado = " Que pena! Você perdeu :(";  
            }else{         
                resultado = " Parabéns, você ganhou!!";
            }
        }
        if(escolhaUsuario == 3){
            if(escolhaMaquinaTraduzida == 1){     
                resultado = " Que pena! Você perdeu :(";  
            }else{         
                resultado = " Parabéns, você ganhou!!";
            }
        }        
    }

    resultadoFinal = "O computador escolheu: " + escolhaMaquinaTexto + resultado;

    document.getElementById("cEscolha-usuario").innerHTML = resultadoFinal;
    
}