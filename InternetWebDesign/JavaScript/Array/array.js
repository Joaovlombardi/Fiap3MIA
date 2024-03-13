const nomes = [
    {nome: 'Ryu',
    tipo: 'vermelho',
    idade: 180},
    {nome: 'Akuma',
    tipo: 'fogo',
    idade: 250}
]

//const nomes = ['João Vitor','Carla','Roberto','Rafael']

//const [nome1,...resto] = nomes
//const [nome1, nome2, nome3, nome4] = nomes

//nomes[1] = 'Jv'
//nomes.push('Novo jogador')
//nomes.pop()

/*for(let i =0; i < nomes.length; i++){
    console.log(nomes[i])
} */

/* nomes.forEach(function(meuItem){
    console.log(meuItem)
}) */

/* nomes.map((element) =>{
    console.log(`Meu nome é ${element}`)
}) */

nomes.filter((element)=>{
    console.log(element.idade>200)
})

