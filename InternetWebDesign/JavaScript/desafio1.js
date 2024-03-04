const prompt = require("prompt-sync")()

function qntLivros() {
    let livros = prompt("Quantidade de livros: ")
    return livros
}

function calcpromocao(qntLivros) {
    if (qntLivros >= 7) {
        return qntLivros * 15
    } else {
        return qntLivros * 22
    }
}

function resultado() {
    const quantidadeLivros = qntLivros()
    const valor = calcpromocao(quantidadeLivros)
    console.log("Valor total: ", valor)
}

resultado()

