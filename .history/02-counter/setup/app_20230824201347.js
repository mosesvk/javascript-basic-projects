let count = 0

let value = document.querySelector('#value')
let buttons = document.querySelectorAll('.btn')

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(btn.classList.value)
    })
})