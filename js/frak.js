var interval
var audioCue = false
const beep = new Audio('/audio/beep.mp3')

function mescola() {
    if (audioCue) {
        beep.play()
    }
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

function toggleHighlight() {
    let tokens = document.querySelectorAll('span')
    tokens.forEach(tokens => {
        tokens.classList.toggle('highlighted')
    });
}

function toggleMenu() {
    let opener = event.target
    let panel = document.querySelector('#panel')
    panel.classList.toggle('nascosto')
    if (panel.classList.contains('nascosto')) {
        opener.textContent = '+'
    } else {
        opener.textContent = '−'
    }
}

function switchLang(event) {
    window.clearInterval(interval)
    let speedControl = document.querySelector('#speed')
    speedControl.setAttribute('disabled', 'disabled')
    let lang = ''
    switch (event.target.value) {
        case '-1':
            lang = 'it'
            break
        case '1':
            lang = 'en'
            break
        default:
            speedControl.removeAttribute('disabled')
            startMixing()
            return
    }
    let parole = document.querySelectorAll('span')
    parole.forEach(parola => {
        parola.dataset.currLang = lang
        let translation = ''
        if (lang === 'en') {
            translation = parola.dataset.langEn
        } else {
            translation = parola.dataset.langIt
        }
        parola.textContent = translation
    })
}

function startMixing() {
    window.clearInterval(interval)
    let speed = document.querySelector('#speed').value
    if (speed !== 0) {
        const MIN_MS = 1
        const MAX_MS = 10000
        let t = (speed - 1) / 99
        let delay = Math.round(MAX_MS + (MIN_MS - MAX_MS) * t)
        let parole = document.querySelectorAll('span')
        for (let i = 0; i < (parole.length / 2); i++) {
            mescola()
        }
        interval = window.setInterval(mescola, delay)
        console.log(speed, delay)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    startMixing()
    
    let opener = document.querySelector('#opener')
    let speedControl = document.querySelector('#speed')
    let langControl = document.querySelector('#lang')
    let highlightControl = document.querySelector('#highlight')
    let beepControl = document.querySelector('#beep')

    opener.addEventListener('click', toggleMenu)
    highlightControl.addEventListener('change', toggleHighlight)
    langControl.addEventListener('change', switchLang)
    speedControl.addEventListener('change', startMixing)
    beepControl.addEventListener('change', () => {
        audioCue = !audioCue
    })
})
