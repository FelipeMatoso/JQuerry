
function finalizaJogo() {
    $(".conteudo").addClass("class-stop")
    $("#campo").addClass("campo-stop")
    $("#botao-reinicia").attr("disabled", false)
    $("#botao-reinicia").focus()
    campo.attr("disabled", true)
    inserePlacar()
}