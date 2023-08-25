let count = 0

let value = document.querySelector('#value').textContent
let buttons = document.querySelectorAll('.btn')

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const classList = btn.classList.value

        if (classList.includes('decrease')) {
            value = count -= 1
        } else if (classList.includes('increase')) {
            value = count += 1
        } else {
            value = 0 
        }

        

        console.log(value)
    })
})