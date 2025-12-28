// function riordinaCasualmente() {
//     const mainTag = document.querySelector('main')
//     const progetti = mainTag.querySelectorAll('div')
//     const progettiArray = Array.from(progetti)

//     progettiArray.sort(() => Math.random() - 0.5)

//     mainTag.innerHTML = ''
//     progettiArray.forEach(progetto => mainTag.appendChild(progetto))
// }

// document.addEventListener('DOMContentLoaded', riordinaCasualmente)

document.addEventListener('DOMContentLoaded', () => {
    const mainTag = document.querySelector('main')
    const progetti = mainTag.querySelectorAll('div')

    progetti.forEach(progetto => {
        const img = progetto.querySelector('img')
        const width = progetto.dataset.pagine / 22
        const baseStyle = "#32325d40 0px 2px 5px -1px, #0000004d 0px 1px 3px -1px, "
        img.style.boxShadow = baseStyle + '0px ' + width + 'px 5px #0000004d'
    });

    const resetButton = document.querySelector('#reset')
    const selettori = document.querySelectorAll('select')
    var filtro = {
        'tipo': 'all',
        'target': 'all',
        'genere': 'all',
        'ruolo': 'all'
    }

    function filtra() {
        let ultimiFiltrati = document.querySelectorAll('.progetto.secondo-piano')
        ultimiFiltrati.forEach(progetto => {
            progetto.classList.remove('secondo-piano')
        })

        resetButton.disabled = true

        for (const key in filtro) {
            if (filtro[key] != 'all') {
                resetButton.disabled = false
                const daFiltrare = document.querySelectorAll(`.progetto:not([data-${key}=${filtro[key]}])`)
                daFiltrare.forEach(progetto => {
                    progetto.classList.add('secondo-piano')
                })
            }
        }

    }

    function resetta() {
        selettori.forEach(selettore => {
            selettore.value = 'all'
        })
        for (const key in filtro) {
            filtro[key] = 'all'
        }
        filtra()
    }

    function impostaFiltro() {
        filtro[this.id] = this.value

        filtra()
    }

    selettori.forEach(selettore => {
        selettore.addEventListener('change', impostaFiltro)
    })

    resetButton.addEventListener('click', resetta)

    let fireBurger = document.querySelector('#menu #icona')

    function controllaClick(e) {
        let menu = document.querySelector('#menu ul')
        if (!menu.contains(e.target) && !fireBurger.contains(e.target)) {
            azionaMenu()
        }
    }

    function azionaMenu() {
        document.querySelector('#menu ul').classList.toggle('nascosto')
        document.querySelectorAll('.annebbiabile').forEach(elemento => {
            elemento.classList.toggle('annebbiato')
        })
        document.querySelectorAll('a:not(.menu-link)').forEach(elemento => {
            elemento.classList.toggle('non-cliccabile')
        })

        if (fireBurger.textContent === '☲') {
            document.addEventListener('click', controllaClick)
            fireBurger.textContent = '☵'
        } else {
            document.removeEventListener('click', controllaClick)
            fireBurger.textContent = '☲'
        }
    }

    fireBurger.addEventListener('click', azionaMenu)
})

