const prompt = require("prompt-sync")()

function getUserInfo(){
    let weight = prompt("Digite o seu peso: ")
    let height = prompt("Digite a sua altura: ")

    return pessoa = {
        peso: weight,
        altura: height
    }
}

function calcImc (pesoInformado=0, alturaInformado=0){
    return pesoInformado / alturaInformado**2
}

function main(){
    //guarda o objeto dp getUserInfo
    let userData = getUserInfo()
    //guarda somente o peso
    let peso = userData.peso
    //guardar somente a altura
    let altura = userData.altura
    //guarda o resultado
    let resultadoImc = calcImc(peso,altura)

    if(resultadoImc <= 18.5){
        console.log(`Seu IMC ${resultadoImc}, você está abaixo do peso.`)
    }
    else if (resultadoImc <=24.9){
        console.log(`Seu IMC ${resultadoImc}, você está no peso ideial.`)
    }
    else if (resultadoImc <=29.9){
        console.log(`Seu IMC ${resultadoImc}, você está um pouco acima do peso.`)
    }
    else if (resultadoImc <=34.9){
            console.log(`Seu IMC ${resultadoImc}, você está com obesidade 1.`)
    }
    else if (resultadoImc <=39.9){
        console.log(`Seu IMC ${resultadoImc}, você está com obesidade 2.`)
    }
    else if (resultadoImc <=40){
        console.log(`Seu IMC ${resultadoImc}, você está com obesidade 3.`)
    }
}

 main()

