"use strict";

var campo = $(".campo-digitacao");
var caracteres = $("#conta-caracteres");
var palavras = $("#conta-palavras");
var tempo_padrao = 6;
$(document).ready(function () {
  console.log("ready");
  atualizaTamanhoFrase();
  inicializaContadores();
  InicializaTimer();
  $("#botao-reinicia").click(reboot);
});

function atualizaTamanhoFrase() {
  var numPalavras = $(".frase").text().split(" ").length;
  var tamanhoFrase = $("#tamanho-frase");
  tamanhoFrase.text(numPalavras);
}

function inicializaContadores() {
  campo.on("input", function () {
    caracteres.text(campo.val().length);
    palavras.text(campo.val().split(/\S+/).length - 1);
  });
}

function Corretor() {
  campo.on("input", function () {
    var digitado = campo.val();
    var frase = $("#frase").text();
    var comparador = frase.substr(0, digitado.length);

    if (comparador == "") {
      campo.removeClass("corretor-certo");
      campo.removeClass("corretor-errado");
    } else if (digitado != comparador) {
      campo.addClass("corretor-errado");
      campo.removeClass("corretor-certo");
    } else {
      campo.addClass("corretor-certo");
      campo.removeClass("corretor-errado");
    }
  });
}

var tempo = $("#temporizador").text();

function InicializaTimer() {
  Corretor();
  campo.one("focus", function () {
    setInterval(function () {
      tempo--;
      $("#temporizador").text(tempo);
      $("#botao-reinicia").attr("disabled", true);

      if (tempo <= 0) {
        finalizaJogo();
        tempo = 1;
        return;
      }
    }, 1000);
  });
}

function finalizaJogo() {
  $(".conteudo").addClass("class-stop");
  $("#campo").addClass("campo-stop");
  $("#botao-reinicia").attr("disabled", false);
  $("#botao-reinicia").focus();
  campo.attr("disabled", true);
  inserePlacar();
}

function inserePlacar() {
  var corpoTabela = $(".placar").find("tbody");
  var usuario = " Doug";
  var numPalavras = $("#conta-palavras").text();
  var linha = "<tr>" + "<td>" + usuario + "</td>" + "<td>" + numPalavras + "</td>" + "</tr>";
  corpoTabela.append(linha);
}

function reboot() {
  tempo = tempo_padrao;
  campo.attr("disabled", false);
  campo.val(null);
  caracteres.text("0");
  palavras.text("0");
  $(".conteudo").removeClass("class-stop");
  campo.removeClass("campo-stop");
  campo.removeClass("corretor-certo");
  campo.removeClass("corretor-errado");
  campo.focus();
}