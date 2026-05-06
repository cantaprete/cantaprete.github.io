function moveTitle() {
    let oldTitle = document.querySelector('h1')
    let h1Text = oldTitle.textContent
    oldTitle.remove()

    let immissionPoint = document.querySelector('#newsletter')
    let newTitle = document.createElement('h1')
    newTitle.textContent = h1Text
    immissionPoint.after(newTitle)

    let oldEmail = document.querySelector('#email')
    let emailAddress = oldEmail.querySelector('a').getAttribute('href')
    console.log(emailAddress)
    let emailLabel = oldEmail.textContent
    oldEmail.remove()
    let newEmailWrapper = document.createElement('p')
    newEmailWrapper.id = 'email'
    let newEmailLink =document.createElement('a')
    newEmailLink.setAttribute('href', emailAddress)
    newEmailLink.textContent = emailLabel
    newEmailWrapper.appendChild(newEmailLink)
    newTitle.after(newEmailWrapper)
}

function spaceContent() {
    let navList = document.querySelector('ul')
    let header = document.querySelector('h1')
    let email = document.querySelector('#email')

    let windowHeight = window.screen.height
    let contentHeight = navList.getBoundingClientRect().height + header.getBoundingClientRect().height + email.getBoundingClientRect().height
    let marginTop = Math.floor((windowHeight - contentHeight) / 2)
    if (marginTop > 0) {
        navList.style.marginTop = marginTop + "px"
    }
    console.log(windowHeight, contentHeight, marginTop)
}

document.addEventListener('DOMContentLoaded', moveTitle)
document.addEventListener('DOMContentLoaded', spaceContent)
document.addEventListener('resize', spaceContent)
