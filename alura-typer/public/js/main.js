let frase = $(".frase").text();
let numPalavras = frase.split(" ").length;
let tamanhoFrase = $("#tamanho-frase");

tamanhoFrase.text(numPalavras);

let campo = $(".campo-digitacao")
let caracteres = $("#conta-caracteres")
let palavras = $("#conta-palavras")

campo.on("input", function () {
    caracteres.text(campo.val().length)
    palavras.text(campo.val().split(/\S+/).length - 1)
})

let tempo = $("#temporizador").text()
campo.one("focus", function () {

        setInterval(function () {
            tempo--
            $("#temporizador").text(tempo) 
            if (tempo <=0) {
                campo.attr("disabled",true)
                tempo = 1
                return
            }
            console.log(tempo)
        },1000)
})