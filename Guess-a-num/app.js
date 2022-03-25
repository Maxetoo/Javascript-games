let input = document.querySelector('input')
let btn = document.querySelector('.btn')
let result = document.querySelector('p')
let guess = document.querySelector('.guess')
let ul = document.querySelector('ul')

let num = Math.floor(Math.random() * 16)

let amount = 1

btn.addEventListener('click', function() {
    let number = parseInt(input.value)
    guess.innerHTML = amount

    if (input.value === '' || number < 0 || number > 15) {
        alert('please guess a number from 0 to 15')
        input.value = ''
    } else if (number === num) {
        alert('correct')
        window.location.reload()
    } else if (number < num) {
        input.value = ''
        amount++
        alert('Try a larger number')
        result.innerHTML = ''
        li = document.createElement('li')
        let elem = `<li>${number}<li>`
        li.innerHTML = elem
        ul.appendChild(li)
    } else if (number > num) {
        input.value = ''
        amount++
        alert('try a smaller number')
        result.innerHTML = ''
        li = document.createElement('li')
        let elem = `<li>${number}<li>`
        li.innerHTML = elem
        ul.appendChild(li)
    }

    if (amount > 5) {
        alert('Game Over')
        window.location.reload()
    } else if (amount >= 5) {
        guess.style.color = 'red'
    }
})