let hole = document.querySelectorAll('.cloud .hole')
let correctScore = 0
let hitId
let score = document.querySelector('.score')
let timer = document.querySelector('.time')
let start = document.querySelector('.start')
let restart = document.querySelector('.restart')

function displayMole() {
    let className = 'mole'
    hole.forEach(function(item) {
        item.classList.remove(className)
    })

    let random = hole[Math.floor(Math.random() * 6)]
    random.classList.add(className)
    hitId = random.dataset.id
}

hole.forEach(function(idItem) {
    idItem.addEventListener('click', function(e) {
        let correctHit = e.target.dataset.id
        if (correctHit === hitId) {
            correctScore++
            score.innerHTML = correctScore
        }
    })
})

let minutes = 1
let time = minutes * 30

function displayTime() {
    let mins = Math.floor((time / 1000) % 60)
    let secs = time % 60
    time--
    timer.innerHTML = mins + ':' + secs

    if (secs === -1) {
        alert('GAME OVER')
        secs = 0
        mins = 0
        timer.innerHTML = mins + ' : ' + secs
        clearInterval(stopTimer)
        clearInterval(stopGame)
        hole.forEach(function(item) {
            item.classList.remove('mole')
        })
        start.addEventListener('click', function() {
            secs = 0
            mins = 0
            timer.innerHTML = mins + ' : ' + secs
            clearInterval(stopTimer)
            clearInterval(stopGame)
            window.location.reload()
        })
    }
}

let stopTimer
let stopGame
start.addEventListener('click', function() {
    stopGame = setInterval(displayMole, 750)
    displayTime()
    stopTimer = setInterval(displayTime, 1000)
})

restart.addEventListener('click', function() {
    window.location.reload()
})