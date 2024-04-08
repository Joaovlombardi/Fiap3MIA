const btn1 = document.querySelector('button')
const listaFilmes = document.querySelector('#listaFilmes')

btn1.addEventListener('click',()=>{
    const valorDigitado = document.querySelector('#filmeInput').value
    //cria elemento id
    const itemLista = document.createElement('li')
    //adicion o li à lista
    listaFilmes.append(itemLista)
    //adiciona o conteúdo a lista
    itemLista.innerHTML = valorDigitado
    //mudar o css do item
    itemLista.style.backgroundColor = 'Red'
    //adicionar uma classe ao item 
    itemLista.classList.add(fundo-azul)
})