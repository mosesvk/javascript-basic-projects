const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', () => {
    // get random number between 0-3
    const randNum = Math.round(Math.random() * 3)
    const bgColor = colors[randNum]
    document.body.style.backgroundColor = bgColor

    console.log(bgColor, backgroundColor)

    backgroundColor = bgColor ;
})