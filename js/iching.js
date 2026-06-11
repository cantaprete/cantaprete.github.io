const iching = [
    { number: 1, symbol: "䷀", pattern: 0b111111, name: "Il cielo" },
    { number: 2, symbol: "䷁", pattern: 0b000000, name: "La terra" },
    { number: 3, symbol: "䷂", pattern: 0b010001, name: "L’inizio" },
    { number: 4, symbol: "䷃", pattern: 0b100010, name: "L’ignoranza" },
    { number: 5, symbol: "䷄", pattern: 0b010111, name: "L’attesa" },
    { number: 6, symbol: "䷅", pattern: 0b111010, name: "La discussione" },
    { number: 7, symbol: "䷆", pattern: 0b000010, name: "La disciplina" },
    { number: 8, symbol: "䷇", pattern: 0b010000, name: "L’unione" },
    { number: 9, symbol: "䷈", pattern: 0b110111, name: "La forza domatrice del piccolo" },
    { number: 10, symbol: "䷉", pattern: 0b111011, name: "Il procedere" },
    { number: 11, symbol: "䷊", pattern: 0b000111, name: "L’armonia" },
    { number: 12, symbol: "䷋", pattern: 0b111000, name: "Il divorzio" },
    { number: 13, symbol: "䷌", pattern: 0b111101, name: "La compagnia" },
    { number: 14, symbol: "䷍", pattern: 0b101111, name: "Il possesso" },
    { number: 15, symbol: "䷎", pattern: 0b000100, name: "L’umiltà" },
    { number: 16, symbol: "䷏", pattern: 0b001000, name: "La gioia" },
    { number: 17, symbol: "䷐", pattern: 0b011001, name: "Il seguito" },
    { number: 18, symbol: "䷑", pattern: 0b100110, name: "L’errore" },
    { number: 19, symbol: "䷒", pattern: 0b000011, name: "L’avvicinarsi" },
    { number: 20, symbol: "䷓", pattern: 0b110000, name: "La contemplazione" },
    { number: 21, symbol: "䷔", pattern: 0b101001, name: "Il mordere" },
    { number: 22, symbol: "䷕", pattern: 0b100101, name: "La bellezza" },
    { number: 23, symbol: "䷖", pattern: 0b100000, name: "La rovina" },
    { number: 24, symbol: "䷗", pattern: 0b000001, name: "Il ritorno" },
    { number: 25, symbol: "䷘", pattern: 0b111001, name: "L’innocenza" },
    { number: 26, symbol: "䷙", pattern: 0b100111, name: "La forza domatrice del grande" },
    { number: 27, symbol: "䷚", pattern: 0b100001, name: "La bocca" },
    { number: 28, symbol: "䷛", pattern: 0b011110, name: "La preponderanza del grande" },
    { number: 29, symbol: "䷜", pattern: 0b010010, name: "Il pericolo" },
    { number: 30, symbol: "䷝", pattern: 0b101101, name: "Il fuoco" },
    { number: 31, symbol: "䷞", pattern: 0b011100, name: "L’affetto" },
    { number: 32, symbol: "䷟", pattern: 0b001110, name: "La costanza" },
    { number: 33, symbol: "䷠", pattern: 0b111100, name: "La ritirata" },
    { number: 34, symbol: "䷡", pattern: 0b001111, name: "Il vigore" },
    { number: 35, symbol: "䷢", pattern: 0b101000, name: "Il progresso" },
    { number: 36, symbol: "䷣", pattern: 0b000101, name: "L’oscurità" },
    { number: 37, symbol: "䷤", pattern: 0b110101, name: "La casa" },
    { number: 38, symbol: "䷥", pattern: 0b101011, name: "La divisione" },
    { number: 39, symbol: "䷦", pattern: 0b010100, name: "Il blocco" },
    { number: 40, symbol: "䷧", pattern: 0b001010, name: "Il rilascio" },
    { number: 41, symbol: "䷨", pattern: 0b100011, name: "La diminuzione" },
    { number: 42, symbol: "䷩", pattern: 0b110001, name: "L’aumento" },
    { number: 43, symbol: "䷪", pattern: 0b011111, name: "La scelta" },
    { number: 44, symbol: "䷫", pattern: 0b111110, name: "L’incontro" },
    { number: 45, symbol: "䷬", pattern: 0b011000, name: "La raccolta" },
    { number: 46, symbol: "䷭", pattern: 0b000110, name: "L’ascendere" },
    { number: 47, symbol: "䷮", pattern: 0b011010, name: "L’angoscia" },
    { number: 48, symbol: "䷯", pattern: 0b010110, name: "Il pozzo" },
    { number: 49, symbol: "䷰", pattern: 0b011101, name: "Il cambiamento" },
    { number: 50, symbol: "䷱", pattern: 0b101110, name: "Il calderone" },
    { number: 51, symbol: "䷲", pattern: 0b001001, name: "Lo shock" },
    { number: 52, symbol: "䷳", pattern: 0b100100, name: "L’arresto" },
    { number: 53, symbol: "䷴", pattern: 0b110100, name: "La gradualità" },
    { number: 54, symbol: "䷵", pattern: 0b001011, name: "L’immatura" },
    { number: 55, symbol: "䷶", pattern: 0b001101, name: "L’abbondanza" },
    { number: 56, symbol: "䷷", pattern: 0b101100, name: "Il viandante" },
    { number: 57, symbol: "䷸", pattern: 0b110110, name: "Il vento" },
    { number: 58, symbol: "䷹", pattern: 0b011011, name: "Il lago" },
    { number: 59, symbol: "䷺", pattern: 0b110010, name: "Il dissolversi" },
    { number: 60, symbol: "䷻", pattern: 0b010011, name: "La limitazione" },
    { number: 61, symbol: "䷼", pattern: 0b110011, name: "La verità interiore" },
    { number: 62, symbol: "䷽", pattern: 0b001100, name: "La preponderanza del piccolo" },
    { number: 63, symbol: "䷾", pattern: 0b010101, name: "Dopo il compimento" },
    { number: 64, symbol: "䷿", pattern: 0b101010, name: "Prima del compimento" }
]

const lineSymbols = {
    0: '<svg width="120" height="24" xmlns="http://www.w3.org/2000/svg"><path class="possibilities modifier" d="M38.929-35.918v4h9.997l-.007 10 4.001.002.007-10.001H62.93v-4l-10-.001.008-9.998-4-.004-.007 10.003z" transform="rotate(45)" /><path class="possibilities modifier" d="M60 2a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10A10 10 0 0060 2zm0 3a7 7 0 017 7 7 7 0 01-7 7 7 7 0 01-7-7 7 7 0 017-7z" /><path class="possibilities" d="M.746 5.996h118.508v12.008H.746zM50.098 5.25v13.5M72 5.25v13.5" /></svg>',
    6: '<svg width="120" height="24" xmlns="http://www.w3.org/2000/svg"><path class="symbol" d="M0 6v12h48V6zm72 0v12h48V6z" /><path class="modifier" d="M52.926 2.107l-2.828 2.83 7.072 7.067-7.072 7.068 2.828 2.83L60 14.832l7.076 7.07 2.826-2.83-7.072-7.068 7.072-7.066-2.826-2.83L60 9.177z" /></svg>',
    7: '<svg width="120" height="24" xmlns="http://www.w3.org/2000/svg"><path class="symbol" d="M0 6h120v12H0z"/></svg>',
    8: '<svg width="120" height="24" xmlns="http://www.w3.org/2000/svg"><path class="symbol" d="M0 6v12h48V6zm72 0v12h48V6z" /></svg>',
    9: '<svg width="120" height="24" xmlns="http://www.w3.org/2000/svg"><path class="symbol" d="M0 6h120v12H0z"/><path class="modifier" d="M60 2a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10A10 10 0 0060 2zm0 3a7 7 0 017 7 7 7 0 01-7 7 7 7 0 01-7-7 7 7 0 017-7z"/></svg>'
}

var linesVal = [0, 0, 0, 0, 0, 0]

function checkWebWorkers() {
    return typeof Worker !== 'undefined';
}

async function throwAllThree() {
    const workers = [
        new Worker('./js/coin.js'),
        new Worker('./js/coin.js'),
        new Worker('./js/coin.js')
    ];

    const promises = workers.map((worker, index) => {
        return new Promise((resolve) => {
            worker.onmessage = (e) => {
                console.log(`Worker ${e.data.workerId}: ${e.data.timestamp} ms - value: ${e.data.value}`);
                resolve(e.data.value);
                worker.terminate();
            };
            worker.postMessage({ id: index + 1 });
        });
    });

    const valori = await Promise.all(promises);
    return valori.reduce((a, b) => a + b, 0);
}

function redraw() {
    let lines = document.querySelectorAll('.line')
    for (let i = 0; i < 6; i++) {
        lines[i].innerHTML = lineSymbols[linesVal[i]]
    }
}

function createLegend(hex) {
    let legend = document.createElement('div')
    legend.classList.add('legend')

    let legendHex = document.createElement('div')
    legendHex.classList.add('hex')
    legendHex.textContent = hex.symbol

    let legendPanel = document.createElement('div')
    legendPanel.classList.add('panel')

    let legendNumber = document.createElement('div')
    legendNumber.classList.add('number')
    legendNumber.textContent = hex.number

    let legendLabel = document.createElement('div')
    legendLabel.classList.add('name')
    legendLabel.textContent = hex.name

    let legendLink = document.createElement('a')
    legendLink.classList.add('link')
    legendLink.setAttribute('href', `https://www.jamesdekorne.com/GBCh/hex${hex.number}.htm`)
    legendLink.setAttribute('target', '_blank')
    legendLink.textContent = 'link'

    legendPanel.append(legendNumber, legendLabel, legendLink)
    legend.append(legendHex, legendPanel)

    return legend
}

function explain() {
    let legend = document.querySelector('#response')
    let movingLines = []

    let firstHex = 0b000000
    let secondHex = 0b000000

    for (let i = 0; i < 6; i++) {
        switch (linesVal[i]) {
            case 6:
                movingLines.push(i + 1)
                firstHex |= (0b0 << i)
                secondHex |= (0b1 << i)
                break;
            case 7:
                firstHex |= (0b1 << i)
                secondHex |= (0b1 << i)
                break;
            case 8:
                firstHex |= (0b0 << i)
                secondHex |= (0b0 << i)
                break;
            case 9:
                firstHex |= (0b1 << i)
                movingLines.push(i + 1)
                secondHex |= (0b0 << i)
                break;
        }
    }

    let start = iching.find(h => h.pattern === firstHex)
    let end = iching.find(h => h.pattern === secondHex)

    let label = ''

    if (movingLines.length > 0) {
        movingLines.forEach(line => {
            label += '.' + line
        });
    }

    document.querySelector('#res-hex').textContent = start.number
    document.querySelector('#res-lines').textContent = label

    const response = document.querySelector('#response')
    response.append(createLegend(start))
    response.classList.remove('nascosto')

    if (firstHex !== secondHex) {
        response.append(createLegend(end))
    }
}

function throwOne() {
    const array = new Uint8Array(1)
    self.crypto.getRandomValues(array)
    return array[0] < 128 ? 2 : 3
}

async function throwCoins() {
    document.querySelector('#reset').removeAttribute('disabled')
    let sum = 0
    if (checkWebWorkers()) {
        sum = await throwAllThree();
    } else {
        for (let i = 0; i < 3; i++) {
            sum += throwOne()
        }
    }

    for (let i = 0; i < 6; i++) {
        if (linesVal[i] === 0) {
            linesVal[i] = sum
            if (i === 5) {
                document.querySelector('#throw').setAttribute('disabled', 'disabled')
                // document.querySelector('#record').removeAttribute('disabled')
                explain()
            }
            break;
        }
    }

    redraw()
}

function reset() {
    document.querySelector('#reset').setAttribute('disabled', 'disabled')
    document.querySelector('#throw').removeAttribute('disabled')
    document.querySelector('label').innerHTML = '<span id="res-hex">&nbsp;</span><span id="res-lines"></span>'
    linesVal.fill(0)
    redraw()
    const response = document.querySelector('#response')
    response.innerHTML = ''
    response.classList.add('nascosto')
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#reset').addEventListener('click', reset)
    document.querySelector('#throw').addEventListener('click', throwCoins)

    if (checkWebWorkers()) {
        console.log('WebWorker disponibili')
    } else {
        console.log('WebWorker non disponibili')
    }
})

document.addEventListener('DOMContentLoaded', reset)