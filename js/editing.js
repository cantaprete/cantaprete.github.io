document.addEventListener('DOMContentLoaded', () => {
    const target = document.querySelector('#invio')

    if (!target) return

    const observer = new IntersectionObserver((entries) => {
        if (entries.some(entry => entry.isIntersecting)) {
            observer.disconnect()
            const alphabetX = [
                '&#46;', '&#64;', '&#97;', '&#99;', '&#100;', '&#105;', '&#106;', '&#109;', '&#110;', '&#111;', '&#112;', '&#114;', '&#115;', '&#116;'
            ]
            const alphabetU = [
                '.', '@', 'a', 'c', 'd', 'i', 'j', 'm', 'n', 'o', 'p', 'r', 's', 't'
            ]

            const key = [
                7, 2, 8, 9, 12, 3, 11, 5, 13, 13, 5, 1, 6, 2, 3, 9, 10, 9, 4, 9, 8, 2, 13, 5, 0, 5, 13
            ]

            const decodeX = key => key.map(index => alphabetX[index]).join('')
            const decodeU = key => key.map(index => alphabetU[index]).join('')

            const clear = document.querySelector('#clear')
            clear.href = 'mailto:' + decodeU(key)
            clear.innerHTML = decodeX(key)
        }
    })

    observer.observe(target);
})