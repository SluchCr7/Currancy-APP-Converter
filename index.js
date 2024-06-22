// let api = `https://v6.exchangerate-api.com/v6/91b7b6b0d0f47202cccbfadb/latest/${from.value}`
let select = document.querySelectorAll('select')


let amount = document.getElementById('amount')
let from = document.getElementById('From')
let to = document.getElementById('To')

select.forEach((ele , id) => {
    for (const country in countries) {
        let select;
        if (id == 0) {
            select = country == "USD" ? "selected" : "";
        }
        if (id == 1) {
            select = country == "EGP" ? "selected" : "";
        }
        let option = `<option value="${country}" ${select}>${country}</option>`
        ele.insertAdjacentHTML('beforeend', option)
    }
})

let convertBtn = document.querySelector('.convertBtn')
convertBtn.addEventListener('click', () => convert())

function convert() {
    let conv = `https://v6.exchangerate-api.com/v6/91b7b6b0d0f47202cccbfadb/latest/${from.value}`
    fetch(conv)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let res = (data.conversion_rates[to.value] * amount.value).toFixed(2)
        document.querySelector('.convert_res span').innerHTML = `${amount.value} ${from.value} = ${res} ${to.value}`    
    })
}       