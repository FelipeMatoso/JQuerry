let campo = $(".campo-digitacao")
let caracteres = $("#conta-caracteres")
let palavras = $("#conta-palavras")

const tempo_padrao = 6





function atualizaTamanhoFrase() {
    let numPalavras = $(".frase").text().split(" ").length
    let tamanhoFrase = $("#tamanho-frase")

    tamanhoFrase.text(numPalavras);
}

function inicializaContadores() {
    campo.on("input", function () {
        caracteres.text(campo.val().length)
        palavras.text(campo.val().split(/\S+/).length - 1)
    })
}

function Corretor() {
    campo.on("input", function () {
        var digitado = campo.val()
        var frase = $("#frase").text()
        var comparador = frase.substr(0, digitado.length)

        if (comparador == "") {
            campo.removeClass("corretor-certo")
            campo.removeClass("corretor-errado")
        } else if (digitado != comparador) {
            campo.addClass("corretor-errado")
            campo.removeClass("corretor-certo")
        } else {
            campo.addClass("corretor-certo")
            campo.removeClass("corretor-errado")
        }
    });
}


let tempo = $("#temporizador").text()

function inicializaTimer() {
    Corretor()
    campo.on("focus", function () {
        var loop = setInterval(() => {
            tempo--
            $("#temporizador").text(tempo)
            $("#botao-reinicia").attr("disabled", true)
            if (tempo == 0) {
                finalizaJogo()
                tempo = 1
                clearInterval(loop)
            }
        }, 1000);
    })
}

function reboot() {
    tempo = tempo_padrao

    campo.attr("disabled", false)
    campo.val(null)

    caracteres.text("0")

    palavras.text("0")


    $(".conteudo").removeClass("class-stop")
    campo.removeClass("campo-stop")

    campo.removeClass("corretor-certo")
    campo.removeClass("corretor-errado")

    campo.focus()
}



