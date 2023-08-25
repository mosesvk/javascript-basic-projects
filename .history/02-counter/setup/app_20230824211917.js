let count = 0

const value = document.querySelector('#value').textContent
const buttons = document.querySelectorAll('.btn')

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        console.log(e)

        if (styles.contains('decrease')) {
            count -= 1
        } else if (styles.contains('increase')) {
            count += 1
        } else {
            count = 0 
        }

        value = count
    })
})