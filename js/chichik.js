document.addEventListener('DOMContentLoaded', () => {
    const capacita = document.querySelector('#capacita')
    const ptAcqua = document.querySelector('#pt_acqua')
    const ptProd = document.querySelector('#pt_prod')
    const resAcqua = document.querySelector('#res_acq')
    const resProd = document.querySelector('#res_prod')

    function calcola() {
        const parti = (ptAcqua.value * 1) + (ptProd.value * 1)
        const parte = capacita.value / parti
        console.log(capacita.value, parti, parte)
        resAcqua.textContent = (parte * ptAcqua.value).toFixed(2)
        resProd.textContent = (parte * ptProd.value).toFixed(2)
    }

    capacita.addEventListener('change', calcola)
    ptAcqua.addEventListener('change', calcola)
    ptProd.addEventListener('change', calcola)

    calcola()
})