function sameCalendar(year, targetYear) {
    if (isLeapYear(year) !== isLeapYear(targetYear)) {
        return false
    }

    if (getDayOfWeek(year, 1, 1) !== getDayOfWeek(targetYear, 1, 1)) {
        return false
    }

    return true
}

function getDayOfWeek(year, month, day) {
    if (month < 3) {
        month += 12
        year -= 1
    }

    let dayOfWeek = day
    dayOfWeek += Math.floor(13 * (month + 1) / 5)
    dayOfWeek += year
    dayOfWeek += Math.floor(year / 4)
    dayOfWeek -= Math.floor(year / 100)
    dayOfWeek += Math.floor(year / 400)
    dayOfWeek = dayOfWeek % 7


    return dayOfWeek
}

function isLeapYear(year) {
    return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)
}

function clearOutput() {
    let outputArea = document.querySelector('#output')
    outputArea.innerHTML = ''
}

document.addEventListener('DOMContentLoaded', () => {
    let nextYear = new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    let chosenYear = document.querySelector('#anno')
    chosenYear.value = nextYear.getFullYear()

    let submit = document.querySelector('#trova')
    submit.addEventListener('click', () => {
        clearOutput()
        let outputArea = document.querySelector('#output')
        const cutYear = document.querySelector('#soglia').value
        const targetYear = chosenYear.value

        for (let year = cutYear; year < targetYear; year++) {
            if (sameCalendar(year, targetYear)) {
                let newYear = document.createElement('div')
                newYear.textContent = year
                outputArea.appendChild(newYear)
            }
        }
    })

    document.querySelector('#anno').addEventListener('change', clearOutput)
    document.querySelector('#soglia').addEventListener('change', clearOutput)
})