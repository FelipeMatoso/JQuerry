$(document).ready(function () {
    console.log("ready")
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaTimer();


    $("#botao-reinicia").click(reboot)

});