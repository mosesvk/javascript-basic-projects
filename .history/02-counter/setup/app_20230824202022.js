let count = 0

let value = document.querySelector('#value').textContent
let buttons = document.querySelectorAll('.btn')

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const styles = e.classList.value

        if (styles.includes('decrease')) {
            count -= 1
        } else if (styles.includes('increase')) {
            count += 1
        } else {
            count = 0 
        }

        console.log(value)
    })
})