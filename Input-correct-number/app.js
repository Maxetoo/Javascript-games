let first = document.querySelector('.first')
let second = document.querySelector('.second')
let input = document.querySelector('input')
let btn = document.querySelector('.btn')
let sign = document.querySelector('.plus')

let firstValue = parseInt(Math.floor(Math.random() * 12))
let secondValue = parseInt(Math.floor(Math.random() * 10))
const signs = ['x', '+', '-', '/']
let randomSign = Math.floor(Math.random() * signs.length)
    //console.log(signs[randomSign]);

first.innerHTML = firstValue
second.innerHTML = secondValue
sign.innerHTML = signs[randomSign]

btn.addEventListener('click', function() {
    let calMul
    let inputer = input.value
    let ranSign = signs[randomSign]
    if (ranSign === 'x') {
        calMul = firstValue * secondValue
    } else if (ranSign === '+') {
        calMul = firstValue + secondValue
    } else if (ranSign === '/') {
        calMul = firstValue / secondValue
    } else if (ranSign === '-') {
        calMul = firstValue - secondValue
    }

    if (inputer === '') {
        alert('please type something')
    } else if (parseInt(inputer) === Math.floor(calMul)) {
        alert('correct')
        window.location.reload()
    } else {
        alert('Wrong ' + '\n' + 'Correct answer: ' + Math.floor(calMul))
        window.location.reload()
    }
})

//USING KEYCODE ENTER
input.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        let calMul
        let inputer = parseInt(input.value)
        let ranSign = signs[randomSign]
        if (ranSign === 'x') {
            calMul = firstValue * secondValue
        } else if (ranSign === '+') {
            calMul = firstValue + secondValue
        } else if (ranSign === '/') {
            calMul = firstValue / secondValue
        } else if (ranSign === '-') {
            calMul = firstValue - secondValue
        }

        if (input.value === '') {
            alert('please type something')
        } else if (parseFloat(inputer) === parseFloat(calMul)) {
            alert('correct')
            window.location.reload()
        } else {
            alert('Wrong ' + '\n' + 'Correct answer: ' + parseFloat(calMul))
            window.location.reload()
        }
    }
})