"use strict";

var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numPalavras);
var campo = $(".campo-digitacao");
var caracteres = $("#conta-caracteres");
var palavras = $("#conta-palavras");
campo.on("input", function () {
  caracteres.text(campo.val().length);
  palavras.text(campo.val().split(/\S+/).length - 1);
});
var tempo = $("#temporizador").text();
campo.one("focus", function () {
  setInterval(function () {
    tempo--;
    $("#temporizador").text(tempo);

    if (tempo <= 0) {
      campo.attr("disabled", true);
      tempo = 1;
      return;
    }

    console.log(tempo);
  }, 1000);
});