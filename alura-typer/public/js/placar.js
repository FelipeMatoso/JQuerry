function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody")
    var usuario = " Doug"
    var numPalavras = $("#conta-palavras").text();


    var linha = criaLinha(usuario, numPalavras)
    linha.find(".botao-delete").click(removeLinha)
    corpoTabela.append(linha)
}

function criaLinha(usuario,numPalavras) {
    var linha = $("<tr>")

    var colunaUsuario = $("<td>").text(usuario)
    var colunaPalavras = $("<td>").text(numPalavras)

    var colunaRemove = $("<td>")
    var link = $("<a>").addClass("botao-delete").attr("href", "#")
    var icone = $("<i>").addClass("small material-icons").text("delete")

    link.append(icone)
    colunaRemove.append(link)

    linha.append(colunaUsuario)
    linha.append(colunaPalavras)
    linha.append(colunaRemove)

    return linha;
}

function removeLinha(e) {
    e.preventDefault();
    $(this).parent().parent().remove() 
}