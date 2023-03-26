;(function () {

    const form = document.querySelector('form')
    const nome = document.querySelector('#nome')
    const quantidade = document.querySelector('#quantidade')
    const lista = document.querySelector('#lista')
    
    form.addEventListener('submit', (evento) => {
        evento.preventDefault()
        const nomeInput = nome.value
        const quantidadeInput = quantidade.value
        criaElemento (nomeInput, quantidadeInput)
    })

    function criaElemento (nomeInput, quantidadeInput) {

        // <li class="item"><strong>7</strong>Camisas</li>
        const novoItem = document.createElement('li')
        novoItem.classList.add('item')

        const numeroItem = document.createElement('strong')
        numeroItem.innerHTML = quantidadeInput

        novoItem.appendChild(numeroItem)
        novoItem.innerHTML += nomeInput

        lista.appendChild(novoItem)

    }




})();