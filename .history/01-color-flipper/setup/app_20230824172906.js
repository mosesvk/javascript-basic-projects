const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', () => {
    // get random number between for the length of the colors array
    const randNum = Math.round(Math.random() * 3)
    const bgColor = colors[randNum]
    document.body.style.backgroundColor = bgColor

    const colorName = document.querySelector('#colorName').innerHTML
    colorName = bgColor
})