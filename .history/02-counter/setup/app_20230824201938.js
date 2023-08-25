let count = 0

let value = document.querySelector('#value').textContent
let buttons = document.querySelectorAll('.btn')

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const classList = btn.classList.value

        if (classList.includes('decrease')) {
            count -= 1
        } else if (classList.includes('increase')) {
            count += 1
        } else {
            count = 0 
        }

        console.log(value)
    })
})