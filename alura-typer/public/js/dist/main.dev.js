"use strict";

var campo = $(".campo-digitacao");
var caracteres = $("#conta-caracteres");
var palavras = $("#conta-palavras");
var tempo_padrao = 6;
$(document).ready(function () {
  console.log("ready");
  atualizaTamanhoFrase();
  inicializaContadores();
  inicializaTimer();
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

function inicializaTimer() {
  Corretor();
  campo.on("focus", function () {
    var loop = setInterval(function () {
      tempo--;
      $("#temporizador").text(tempo);
      $("#botao-reinicia").attr("disabled", true);

      if (tempo == 0) {
        finalizaJogo();
        tempo = 1;
        clearInterval(loop);
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
  var linha = criaLinha(usuario, numPalavras);
  linha.find(".botao-delete").click(removeLinha);
  corpoTabela.append(linha);
}

function criaLinha(usuario, numPalavras) {
  var linha = $("<tr>");
  var colunaUsuario = $("<td>").text(usuario);
  var colunaPalavras = $("<td>").text(numPalavras);
  var colunaRemove = $("<td>");
  var link = $("<a>").addClass("botao-delete").attr("href", "#");
  var icone = $("<i>").addClass("small material-icons").text("delete");
  link.append(icone);
  colunaRemove.append(link);
  linha.append(colunaUsuario);
  linha.append(colunaPalavras);
  linha.append(colunaRemove);
  console.log(linha);
  return linha;
}

function removeLinha(e) {
  e.preventDefault();
  $(this).parent().parent().remove();
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

BABABOKGDAOJADG;