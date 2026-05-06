const delay = ms => new Promise(res => setTimeout(res, ms))
var speed = 1000

function mescola() {
    let parole = document.querySelectorAll('span')
    let parola = parole[Math.floor(Math.random() * parole.length)]
    if (parola.dataset.currLang === 'en') {
        parola.textContent = parola.dataset.langIt
        parola.dataset.currLang = 'it'
    } else {
        parola.textContent = parola.dataset.langEn
        parola.dataset.currLang = 'en'
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let parole = document.querySelectorAll('span')
    for (let i = 0; i < (parole.length / 2); i++) {
        mescola()
    }
    window.setInterval(mescola, speed)
})