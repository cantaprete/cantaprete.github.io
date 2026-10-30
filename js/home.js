
function toggleMenu(e) {
    let opener = document.querySelector('#opener')
    if ((e.target !== opener) && (e.target !== document.querySelector('#submenu'))) {
        return
    }
    let submenu = document.querySelector('#submenu').querySelector('ul')
    submenu.classList.toggle('nascosto')

    if (submenu.classList.contains('nascosto')) {
        opener.textContent = '+'
    } else {
        opener.textContent = '−'
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#submenu').addEventListener('click', toggleMenu)
    document.querySelector('#opener').textContent = '+'
})
