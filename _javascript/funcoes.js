function jokenpo() {
    var escolhaMaquina = Math.random();
    var escolha = parseInt(document.getElementById('cEscolha').value);

    document.getElementById('cEscolha-usuario').value = escolhaMaquina;
}