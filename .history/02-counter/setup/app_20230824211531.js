let count = 0

const value = document.querySelector('#value')
const buttons = document.querySelectorAll('.btn')

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