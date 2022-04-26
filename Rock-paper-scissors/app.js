const random = [
    './images/paper.png',
    './images/rock.png',
    './images/scissors.png',
]
let rock = document.querySelector('.rock')
let paper = document.querySelector('.paper')
let sci = document.querySelector('.sci')
let start = document.querySelector('.start')
let displayUser = document.querySelector('.display-user')
let displayComp = document.querySelector('.display-comp')
let userScore = document.querySelector('.user-score')
let compScore = document.querySelector('.comp-score')
let restart = document.querySelector('.restart')

let genUserScore = 1
let genCompScore = 1

rock.addEventListener('click', function() {
    displayUser.innerHTML = `<img src="./images/rock.png" alt="image">`
})

paper.addEventListener('click', function() {
    displayUser.innerHTML = `<img src="./images/paper.png" alt="image">`
})

sci.addEventListener('click', function() {
    displayUser.innerHTML = `<img src="./images/scissors.png" alt="image">`
})

restart.addEventListener('click', function() {
    window.location.reload()
})

start.addEventListener('click', function() {
    if (displayUser.innerHTML === '') {
        alert('please input something')
    } else {
        let randomNum = Math.floor(Math.random() * 3)

        displayComp.innerHTML = `<img src=${random[randomNum]} alt="image">`
        console.log(displayComp.innerHTML)
        setTimeout(startGame, 10)
        setTimeout(remover, 100)
    }
})

function startGame() {
    let paperpick = `<img src="./images/paper.png" alt="image">`
    let rockPick = `<img src="./images/rock.png" alt="image">`
    let sciPick = `<img src="./images/scissors.png" alt="image">`

    if (
        displayUser.innerHTML === rockPick &&
        displayComp.innerHTML === rockPick
    ) {
        alert('tie')
    } else if (
        displayUser.innerHTML === rockPick &&
        displayComp.innerHTML === paperpick
    ) {
        alert('you lose')
        compScore.innerHTML = genCompScore++
    } else if (
        displayUser.innerHTML === rockPick &&
        displayComp.innerHTML === sciPick
    ) {
        alert('you win')
        userScore.innerHTML = genUserScore++
    } else if (
        displayUser.innerHTML === paperpick &&
        displayComp.innerHTML === paperpick
    ) {
        alert('tie')
    } else if (
        displayUser.innerHTML === paperpick &&
        displayComp.innerHTML === rockPick
    ) {
        alert('you win')
        userScore.innerHTML = genUserScore++
    } else if (
        displayUser.innerHTML === paperpick &&
        displayComp.innerHTML === sciPick
    ) {
        alert('you lose')
        compScore.innerHTML = genCompScore++
    } else if (
        displayUser.innerHTML === sciPick &&
        displayComp.innerHTML === sciPick
    ) {
        alert('tie')
    } else if (
        displayUser.innerHTML === sciPick &&
        displayComp.innerHTML === paperpick
    ) {
        alert('you win')
        userScore.innerHTML = genUserScore++
    } else if (
        displayUser.innerHTML === sciPick &&
        displayComp.innerHTML === rockPick
    ) {
        alert('you lose')
        compScore.innerHTML = genCompScore++
    }

    if (genUserScore === 6) {
        alert('YOU WON THE GAME ')
        window.location.reload()
    } else if (genCompScore === 6) {
        alert('YOU LOST TO A BOT')
        window.location.reload()
    }
}

function remover() {
    displayComp.innerHTML = ''
    displayUser.innerHTML = ''
}