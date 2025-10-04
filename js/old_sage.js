var lines_val = [0, 0, 0, 0, 0, 0]

document.addEventListener('DOMContentLoaded', () => {
  function redraw() {
    let lines = document.querySelectorAll('.line')
    for (let i = 0; i < 6; i++) {
      let class_name = 'unset'
      switch(lines_val[i]) {
        case 6:
          class_name = 'yin_'
          break
        case 7:
          class_name = 'yang'
          break
        case 8:
          class_name = 'yin'
          break
        case 9:
          class_name = 'yang_'
          break
        default:
          break
      }
      lines[i].classList = 'line'
      lines[i].classList.add(class_name)
    }
  }

  function explain() {
    let legend = document.querySelector('#legend')
    legend.classList.remove('hidden')

    let fir_hex = 0b000000
    let sec_hex = 0b000000

    for (let i = 0; i < 6; i++) {
      switch(lines_val[i]) {
        case 6:
          fir_hex |= (0b0 << i) 
          sec_hex |= (0b1 << i)
          break;
        case 7:
          fir_hex |= (0b1 << i) 
          sec_hex |= (0b1 << i)
          break;
        case 8:
          fir_hex |= (0b0 << i) 
          sec_hex |= (0b0 << i)
          break;
        case 9:
          fir_hex |= (0b1 << i) 
          sec_hex |= (0b0 << i)
          break;
      }
    }

    start = iching.find(h => h.pattern === fir_hex)
    end = iching.find(h => h.pattern === sec_hex)

    let from = legend.querySelector('#from')
    from.querySelector('.number').textContent = start.number    
    from.querySelector('.hex').textContent = start.symbol    
    from.querySelector('.name').textContent = start.name    

    if (fir_hex !== sec_hex) {
      legend.querySelector('#arrow').classList.remove('hidden')

      let to = legend.querySelector('#to')
      to.querySelector('.number').textContent = end.number 
      to.querySelector('.hex').textContent = end.symbol    
      to.querySelector('.name').textContent = end.name    
    }
  }

  function throw_one() {
    let side = Math.floor(Math.random() * 2)
    switch(side) {
      case 0:
        return 2
      case 1:
        return 3
    }
  }

  function throw_coins() {
    let sum = 0

    for (let i = 0; i < 3; i++) {
      sum += throw_one()
    }

    for (let i = 0; i < 6; i++) {
      if (lines_val[i] === 0) {
        lines_val[i] = sum
        if (i === 5) {
          explain()
        }
        break;
      }
    }

    redraw()    
  }

  function empty_the_legend() {
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
  }

  let reset_btn = document.querySelector('#reset')
  let throw_btn = document.querySelector('#throw')

  throw_btn.addEventListener('click', throw_coins)
  reset_btn.addEventListener('click', () => {
    lines_val.fill(0)
    redraw()
    empty_the_legend()
  })
})
