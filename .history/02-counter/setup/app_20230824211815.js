let count = 0

const value = document.querySelector('#value')
const buttons = document.querySelectorAll('.btn')

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.classList.value
        console.log(styles)

        if (styles.contains('decrease')) {
            count -= 1
        } else if (styles.contains('increase')) {
            count += 1
        } else {
            count = 0 
        }


    })
})