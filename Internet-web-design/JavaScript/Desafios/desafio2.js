const prompt = require("prompt-sync")();

function infoVelocidade() {
    let velocidade = parseFloat(prompt("Velocidade: "));
    return velocidade;
}

function check(parametro) {
    if (parametro > 60) {
        let ultrapassado = parametro - 60;
        let valorFinal = ultrapassado * 100;
        return console.log(`Você ultrapassou ${ultrapassado} e terá que pagar ${valorFinal}`);
    } else {
        return console.log("Você está dentro do limite.");
    }
}

function main() {
    let valor = infoVelocidade();
    check(infoVelocidade());
}

main();




















































