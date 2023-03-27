;(function () {

    const form = document.querySelector('form')
    const nome = document.querySelector('#nome')
    const quantidade = document.querySelector('#quantidade')
    const lista = document.querySelector('#lista')
    
    //esse "itens" do getItem("itens") é o que está no local storage e não o array
    const itens = JSON.parse(localStorage.getItem("itens")) || []   

    console.log(itens)

    itens.forEach((element) => {
        criaElemento(element)
    });

    form.addEventListener('submit', (evento) => {
        evento.preventDefault()

        const nomeInput = nome.value
        const quantidadeInput = quantidade.value

        const existe = itens.find(element => element.nome === nomeInput)

        const itemAtual = {
            "nome": nomeInput,
            "quantidade": quantidadeInput
        }
        
        if(existe) {

            itemAtual.id = existe.id

            atualizaElemento(itemAtual)

        } else {
            itemAtual.id = itens.length

            criaElemento (itemAtual)
    
            itens.push(itemAtual)
        }

    
        localStorage.setItem("itens", JSON.stringify(itens))

        nome.value = ''
        quantidade.value = ''
    })

    function criaElemento (item) {

        // <li class="item"><strong>7</strong>Camisas</li>
        const novoItem = document.createElement('li')
        novoItem.classList.add('item')

        const numeroItem = document.createElement('strong')
        numeroItem.innerHTML = item.quantidade
        numeroItem.dataset.id = item.id

        novoItem.appendChild(numeroItem)
        novoItem.innerHTML += item.nome

        lista.appendChild(novoItem)

    }

    function atualizaElemento(item) {
        document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
    }

})();