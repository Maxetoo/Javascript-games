const messages = [
    'Made me your love so as to keep moving on mehn',
    'knight employee let you power menance of queue',
    'Chase wealth, power and status makes you whole',
    'For the sake of love and money. Richer by night or thanks',
    'Prayer Pree Kopert lopi78 goat is haste in mud',
]
let accuracy = document.querySelector('.accuracy-val')
let wpm = document.querySelector('.wpm-val')
let seconds = document.querySelector('.secs')
let words = document.querySelector('.words')
let input = document.querySelector('.input-text')
let form = document.querySelector('form')
let btn = document.querySelector('.btn-start')
let scoreValue = document.querySelector('.score-val')
let gameMenu = document.querySelector('.game-over')
let gameMenuContainer = document.querySelector('.game-over-container')
let btnRestart = document.querySelector('.restart')
let gameEnded = false
let count = 0
let score = 0
let presentMessage = 0
let time = 15
let scoreVal = 0

const handleCountDown = () => {
    let clearTimer
    let countDate = new Date().getTime() + 59000
    let now = new Date().getTime()

    let secs = Math.floor(((countDate - now) % (1000 * 60)) / 1000)
    count++
    if (count === 1) {
        clearTimer = setInterval(() => {
            secs--
            seconds.innerHTML = secs
            if (secs < 0) {
                gameEnded = true
                secs = 0
                seconds.innerHTML = 0
                clearInterval(clearTimer)
                if (scoreVal !== messages.length) {
                    gameMenu.classList.add('reveal-game-menu')
                    gameMenuContainer.innerHTML = `<h3 class="game-is-over">TIME UP</h3>
                     <p class="score-display">Your score is ${scoreVal}/5</p>
                     <p class="score-msg">You did great, better luck next time</p>`
                }
            }
        }, 1000)
    }
}

const gameEndedMenu = () => {
    if (scoreVal === messages.length && seconds.innerHTML != 0) {
        gameMenu.classList.add('reveal-game-menu')
        gameMenuContainer.innerHTML = `<h3 class="congrats">CONGRATS!!!</h3>
                     <p class="congrats-msg">You won, you're truly a speedstar</p>`
    }
}

const handleChangeQuestion = () => {
    words.innerHTML = messages[presentMessage]
}

const calAccuracy = () => {
    let sumSpans = document.querySelectorAll('.each-span')
    let allSumSpans = Array.from(sumSpans)
    let men = allSumSpans.filter((value) => {
        return value.classList.contains('right')
    }).length
    sumSpans.forEach((value) => {
        if (value.classList.contains('right')) {
            let accuracyValue = (men / words.innerText.length) * 100
            accuracy.innerHTML = `${Math.floor(accuracyValue)}%`
        }
    })
}

const moveToNextRound = () => {
    let cumSpans = document.querySelectorAll('.each-span')
    let allCumSpans = Array.from(cumSpans)
    let everyCumSpans = allCumSpans.every((value) =>
        value.classList.contains('right')
    )
    if (everyCumSpans && input.value.length === messages[presentMessage].length) {
        btn.innerHTML = 'Next'
    } else {
        btn.innerHTML = 'Start'
    }
}

const handleLoad = () => {
    handleChangeQuestion()

    let wordings = words.innerText.split('')
    const spans = wordings
        .map((value) => {
            return `<span class="each-span">${value}</span>`
        })
        .join('')
    words.innerHTML = spans
    moveToNextRound()
    gameEndedMenu()
}

const handleSubmit = (e) => {
    e.preventDefault()
    let name = btn.innerHTML

    if (name === 'Next') {
        presentMessage += 1
        input.value = ''
        name === 'Start'
        accuracy.innerHTML = '0%'
        scoreVal++
        scoreValue.innerHTML = scoreVal
    }

    handleLoad()
    handleCountDown()
}

const handleTextChange = () => {
    handleCountDown()
    let inputTexts = input.value.split('')
    let wordings = messages[presentMessage].split('')
    let allSpans = document.querySelectorAll('.each-span')
    allSpans.forEach((value, index) => {
        let eachSpanIndex = value.innerText
        if (inputTexts[index] === eachSpanIndex) {
            value.classList.add('right')
        } else {
            value.classList.remove('right')
            value.classList.remove('wrong')
            let conWord = wordings.slice(0, inputTexts.length)
            let extraWord = inputTexts
                .map((value, index) => (value !== conWord[index] ? index : null))
                .filter((value) => value !== null)
            extraWord.forEach((value) => {
                allSpans[value].classList.add('wrong')
            })
        }
    })
    calAccuracy()
    moveToNextRound()
}

const handleRestart = () => {
    window.location.reload()
}

btnRestart.addEventListener('click', handleRestart)

btn.addEventListener('click', handleSubmit)
form.addEventListener('submit', handleSubmit)
input.addEventListener('keyup', handleTextChange)
document.addEventListener('DOMContentLoaded', handleLoad)