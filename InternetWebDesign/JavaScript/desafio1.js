const prompt = require("prompt-sync")()

function qntLivros() {
    let livros = prompt("Quantidade de livros: ")
    return livros
}

const livroNormal = 22
const livropromocao = 15

function calcpromocao(qntLivros = 0) {
    if (qntLivros >= 7) {
        return qntLivros * livropromocao
    } else {
        return qntLivros * livroNormal
    }
}

function resultado() {
    const quantidadeLivros = qntLivros()
    const valor = calcpromocao(quantidadeLivros)
    console.log("Valor total: ", valor)
}

resultado()

