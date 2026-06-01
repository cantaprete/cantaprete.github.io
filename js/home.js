function moveTitle() {
    let oldHeader = document.querySelector('header')
    let h1Text = document.querySelector('h1').textContent
    let oldEmail = document.querySelector('#email')
    let emailAddress = oldEmail.querySelector('a').getAttribute('href')
    let emailLabel = oldEmail.textContent

    oldHeader.remove()

    let immissionPoint = document.querySelector('#libri')
    
    let newHeader = document.createElement('header')
    immissionPoint.after(newHeader)

    let newTitle = document.createElement('h1')
    newTitle.textContent = h1Text
    newHeader.appendChild(newTitle)
    oldEmail.remove()
    let newEmailWrapper = document.createElement('p')
    newEmailWrapper.id = 'email'
    let newEmailLink =document.createElement('a')
    newEmailLink.setAttribute('href', emailAddress)
    newEmailLink.textContent = emailLabel
    newEmailWrapper.appendChild(newEmailLink)
    newTitle.after(newEmailWrapper)
}

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

// document.addEventListener('DOMContentLoaded', moveTitle)

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#submenu').addEventListener('click', toggleMenu)
    document.querySelector('#opener').textContent = '+'
})
