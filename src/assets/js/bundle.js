const rock = document.querySelector('.rock')
const papper = document.querySelector('.papper')
const scissors = document.querySelector('.scissors')
const play = document.querySelector('.play')

let scoreplayer = document.querySelector('#score-player')
let scorebot = document.querySelector('#score-bot')
let scoredraw = document.querySelector('#score-draw')
let logoPlayer = document.querySelector('.logo-player')
let logoBot = document.querySelector('.logo-bot')
let logoDraw = document.querySelector('.logo-draw')
let player;

const scorePlayer = []
const scoreBot = []
const scoreDraw = []

rock.addEventListener('click', () => player = 0)
papper.addEventListener('click', () => player = 1)
scissors.addEventListener('click', () => player = 2)
play.addEventListener('click', () => playGame(player))

function playGame (player) {

    const options = ['rock', 'papper', 'scissor']
    
    const bot  = Math.floor(Math.random()*options.length)

    if (player === undefined){
        alert('No has seleccionado ninguna opción')
    }
    else if (player == bot) {
        scoreDraw.push(1)
        scoredraw.innerText = scoreDraw.length
        console.log(`Ambos jugadores empatan con ${options[player]}`)
        logoPlayer.src = `./src/assets/logos/${options[player]}.png`
        logoBot.src = `./src/assets/logos/${options[bot]}.png`
        logoDraw.src = './src/assets/logos/empate.png'
    } else if (player == 0 && bot == 2) {
        console.log(`Player win (${options[player]} / ${options[bot]})`)
        scorePlayer.push(1)
        scoreplayer.innerText = scorePlayer.length
        logoPlayer.src = `./src/assets/logos/${options[player]}.png`
        logoBot.src = `./src/assets/logos/${options[bot]}.png`
        logoDraw.src = './src/assets/logos/win.png'
    } else if (player == 1 && bot == 0) {
        console.log(`Player win (${options[player]} / ${options[bot]})`)
        scorePlayer.push(1)
        scoreplayer.innerText = scorePlayer.length
        logoPlayer.src = `./src/assets/logos/${options[player]}.png`
        logoBot.src = `./src/assets/logos/${options[bot]}.png`
        logoDraw.src = './src/assets/logos/win.png'
    } else if (player == 2 && bot == 1) {
        console.log(`Player win (${options[player]} / ${options[bot]})`)
        scorePlayer.push(1)
        scoreplayer.innerText = scorePlayer.length
        logoPlayer.src = `./src/assets/logos/${options[player]}.png`
        logoBot.src = `./src/assets/logos/${options[bot]}.png`
        logoDraw.src = './src/assets/logos/win.png'
    } else {
        console.log(`Bot win (${options[player]} / ${options[bot]})`)
        scoreBot.push(1)
        scorebot.innerText = scoreBot.length
        logoPlayer.src = `./src/assets/logos/${options[player]}.png`
        logoBot.src = `./src/assets/logos/${options[bot]}.png`
        logoDraw.src = './src/assets/logos/lose.png'
    }
}