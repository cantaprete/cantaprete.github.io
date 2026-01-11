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

document.addEventListener('DOMContentLoaded', () => {
  const useWebWorkers = checkWebWorkers();
  console.log('Web Workers available:', useWebWorkers);

  function redraw() {
    let lines = document.querySelectorAll('.line')
    for (let i = 0; i < 6; i++) {
      let className = 'unset'
      switch (linesVal[i]) {
        case 6:
          className = 'yin_'
          break
        case 7:
          className = 'yang'
          break
        case 8:
          className = 'yin'
          break
        case 9:
          className = 'yang_'
          break
        default:
          break
      }
      lines[i].classList = 'line'
      lines[i].classList.add(className)
    }
  }

  function explain() {
    let legend = document.querySelector('#legend')
    legend.classList.remove('hidden')

    let firstHex = 0b000000
    let secondHex = 0b000000

    for (let i = 0; i < 6; i++) {
      switch (linesVal[i]) {
        case 6:
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
          secondHex |= (0b0 << i)
          break;
      }
    }

    let start = iching.find(h => h.pattern === firstHex)
    let end = iching.find(h => h.pattern === secondHex)

    let from = legend.querySelector('#from')
    from.querySelector('.number').textContent = start.number
    from.querySelector('.hex').textContent = start.symbol
    from.querySelector('.name').textContent = start.name

    if (firstHex !== secondHex) {
      legend.querySelector('#arrow').classList.remove('hidden')
      legend.querySelector('#to').classList.remove('hidden')

      let to = legend.querySelector('#to')
      to.querySelector('.number').textContent = end.number
      to.querySelector('.hex').textContent = end.symbol
      to.querySelector('.name').textContent = end.name
    }
  }

  function throwOne() {
    const array = new Uint8Array(1)
    self.crypto.getRandomValues(array)
    return array[0] < 128 ? 2 : 3
  }

  async function throwCoins() {
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
          explain()
        }
        break;
      }
    }

    redraw()
  }

  function emptyTheLegend() {
    let legend = document.querySelector('#legend')

    legend.classList.add('hidden')
    legend.querySelectorAll('.number').forEach(node => {
      node.textContent = ''
    })
    legend.querySelectorAll('.hex').forEach(node => {
      node.textContent = ''
    })
    legend.querySelectorAll('.name').forEach(node => {
      node.textContent = ''
    })
    legend.querySelector('#arrow').classList = 'hidden'
    legend.querySelector('#to').classList.add('hidden')
  }

  let resetBtn = document.querySelector('#reset')
  let throwBtn = document.querySelector('#throw')

  throwBtn.addEventListener('click', throwCoins)
  resetBtn.addEventListener('click', () => {
    linesVal.fill(0)
    redraw()
    emptyTheLegend()
  })
})
