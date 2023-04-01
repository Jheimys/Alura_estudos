;(function () {

    //Variáveis
    const frm = document.querySelector('form')
    const imClube = document.getElementById('imgClube')
    const dvTitulo = document.getElementById('divTitulo')
    
    //Função
    const trocarClube = () => {
        let clube 

        if(frm.rbBrasil.checked) {
            clube = "Brasil"
        } else if(frm.rbPelotas.checked) {
            clube = "Pelotas"
        } else {
            clube = "Farroupilha"
        }

        dvTitulo.className = `row cores-${clube}`

        imClube.src = `./img/${clube.toLowerCase()}.png`
        imClube.className = "img-fluid"
        imClube.alt = `Símbolo do ${clube}`

        localStorage.setItem("clube", clube)
    }

    const verificaClube = () => {
        if(localStorage.getItem("clube")) {
            const clube = localStorage.getItem("clube")

            if(clube === "Brasil") {

                frm.rbBrasil.checked = true

            } else if(clube === "Pelotas") {
               
                frm.rbPelotas.checked = true

            } else {

                frm.rbFarroupilha.checked = true
            }

            trocarClube()
        }
    }

    //Eventos
    // console.log(frm.rbBrasil.addEventListener("change", trocarClube))
    frm.rbBrasil.addEventListener("change", trocarClube)
    frm.rbPelotas.addEventListener("change", trocarClube)
    frm.rbFarroupilha.addEventListener("change", trocarClube)
    window.addEventListener('load', verificaClube)

})();