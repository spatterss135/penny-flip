const gameTitle = document.getElementById('game-title')
const imageContainer = document.getElementById('image-container')
// const flipButton = document.querySelector('#flip')
// const clearButton = document.querySelector('#clear')
const scoreboardHeader = document.getElementById('scoreboard-header')
const scoreboardData = document.getElementById('scoreboard-data')
const message = document.querySelector('.message-container')
const pennyGame = document.getElementById('penny-game')
const diceGame = document.getElementById('dice-game')
let body = document.querySelector('body')
let buttonContainer = document.querySelector('.buttons')

pennyGame.addEventListener('click', flipCoin)
diceGame.addEventListener('click', rollDice)


function insertImages(game) {
    let images = imageContainer.children;
    for (let i=0;i<images.length;){
        images[i].remove()
    } 
    if (game === 'penny') {
        let newImage = document.createElement('img')
        newImage.setAttribute('src', 'assets/images/penny-heads.jpg')
        newImage.id = 'penny-image'
        imageContainer.append(newImage)
    }
    if (game === 'dice') {
        for (let i=1;i<=6;i++){
            let newImage = document.createElement('img')
            newImage.setAttribute('src', 'assets/images/dice/dice'+i+'.png')
            imageContainer.append(newImage)
        }
        
    }
}

function insertScoreboard(game) {
    const columnNames = scoreboardHeader.children;
    for (let i=0;i<columnNames.length;){
        columnNames[i].remove()
    } 
    const dataPoints = scoreboardData.children
    for (let i=0;i<dataPoints.length;){
        dataPoints[i].remove()
    } 
    if (game === 'penny') {
        // Set up the header row
        let columnOne = document.createElement('th')
        columnOne.textContent = 'Number of Heads'
        scoreboardHeader.append(columnOne)
        let columnTwo = document.createElement('th')
        columnTwo.textContent = 'Percentage Heads'
        scoreboardHeader.append(columnTwo)
        let columnThree = document.createElement('th')
        columnThree.textContent = 'Number of Tails'
        scoreboardHeader.append(columnThree)
        let columnFour = document.createElement('th')
        columnFour.textContent = 'Percentage Tails'
        scoreboardHeader.append(columnFour)
        
        // Set up the data row
        let dataPointOne = document.createElement('td')
        dataPointOne.textContent = '0'
        dataPointOne.id = 'heads'
        scoreboardData.append(dataPointOne)
        let dataPointTwo = document.createElement('td')
        dataPointTwo.textContent = '0%'
        dataPointTwo.id = 'heads-percent'
        scoreboardData.append(dataPointTwo)
        let dataPointThree = document.createElement('td')
        dataPointThree.textContent = '0'
        dataPointThree.id = 'tails'
        scoreboardData.append(dataPointThree)
        let dataPointFour = document.createElement('td')
        dataPointFour.textContent = '0%'
        dataPointFour.id = 'tails-percent'
        scoreboardData.append(dataPointFour)  
    }
    if (game === 'dice') {
        // Set up the header row
        let columnOne = document.createElement('th')
        columnOne.textContent = 'Ones'
        scoreboardHeader.append(columnOne)
        let columnTwo = document.createElement('th')
        columnTwo.textContent = 'Twos'
        scoreboardHeader.append(columnTwo)
        let columnThree = document.createElement('th')
        columnThree.textContent = 'Threes'
        scoreboardHeader.append(columnThree)
        let columnFour = document.createElement('th')
        columnFour.textContent = 'Fours'
        scoreboardHeader.append(columnFour)
        let columnFive = document.createElement('th')
        columnFive.textContent = 'Fives'
        scoreboardHeader.append(columnFive)
        let columnSix = document.createElement('th')
        columnSix.textContent = 'Sixes'
        scoreboardHeader.append(columnSix)
        let columnSeven = document.createElement('th')
        columnSeven.textContent = 'Streak'
        scoreboardHeader.append(columnSeven)
        let columnEight = document.createElement('th')
        columnEight.textContent = 'Longest Streak'
        scoreboardHeader.append(columnEight)
        

        let dataPointOne = document.createElement('td')
        dataPointOne.textContent = '0'
        dataPointOne.id = 'ones'
        scoreboardData.append(dataPointOne)
        let dataPointTwo = document.createElement('td')
        dataPointTwo.textContent = '0'
        dataPointTwo.id = 'twos'
        scoreboardData.append(dataPointTwo)
        let dataPointThree = document.createElement('td')
        dataPointThree.textContent = '0'
        dataPointThree.id = 'threes'
        scoreboardData.append(dataPointThree)
        let dataPointFour = document.createElement('td')
        dataPointFour.textContent = '0'
        dataPointFour.id = 'fours'
        scoreboardData.append(dataPointFour)
        let dataPointFive = document.createElement('td')
        dataPointFive.textContent = '0'
        dataPointFive.id = 'fives'
        scoreboardData.append(dataPointFive) 
        let dataPointSix = document.createElement('td')
        dataPointSix.textContent = '0'
        dataPointSix.id = 'sixs'
        scoreboardData.append(dataPointSix)
        let dataPointSeven = document.createElement('td')
        dataPointSeven.textContent = '0'
        dataPointSeven.id = 'streak'
        scoreboardData.append(dataPointSeven) 
        let dataPointEight = document.createElement('td')
        dataPointEight.textContent = '0'
        dataPointEight.id = 'longest-streak'
        scoreboardData.append(dataPointEight)      

    }
}

// function insertButton() {
//     for (i=0;i<buttonContainer.children.length;){
//         buttonContainer.children[i].remove()
//     }
//     let flipButton = document.createElement('button')
//     flipButton.id = 'flip'
//     buttonContainer.append(flipButton)
//     let clearButton = document.createElement('button')
//     clearButton.id = 'clear'
//     buttonContainer.append(clearButton)
// }



function flipCoin() {
    for (i=0;i<buttonContainer.children.length;){
        buttonContainer.children[i].remove()
    }
    let flipButton = document.createElement('button')
    flipButton.id = 'flip'
    buttonContainer.append(flipButton)
    let clearButton = document.createElement('button')
    clearButton.id = 'clear'
    buttonContainer.append(clearButton)
    gameTitle.textContent = 'Penny Flip Game'
    insertImages('penny')
    flipButton.textContent = 'Flip the Penny!'
    clearButton.textContent = 'Clear Scoreboard'
    insertScoreboard('penny')
    let heads = 0
    let tails = 0
    const pennyImage = document.querySelector('#penny-image')
    const headsScore = document.querySelector('#heads')
    const tailsScore = document.querySelector('#tails')
    const headsPct = document.querySelector('#heads-percent')
    const tailsPct = document.querySelector('#tails-percent')
    function flipEvent() {
        let isHeads = Math.random() > 0.5
        if (isHeads) {
            heads++
            pennyImage.setAttribute('src', "assets/images/penny-heads.jpg")
            message.textContent = 'It be Heads!'
        }
        else {
            tails++
            pennyImage.setAttribute('src', "assets/images/penny-tails.jpg")
            message.textContent = 'It be Tails!'
        }
        let total = heads + tails
        headsScore.textContent = heads
        tailsScore.textContent = tails
        headsPct.textContent = String(Math.round(heads/total * 100)) + '%'
        tailsPct.textContent =  String(Math.round(tails/total * 100)) + '%'
    
    
    }
    flipButton.addEventListener('click', flipEvent) 
    function clearEvent() {
        heads = 0
        tails = 0
        headsScore.textContent = heads
        tailsScore.textContent = tails
        headsPct.textContent = '0%'
        tailsPct.textContent =  '0%'

    }
    clearButton.addEventListener('click', clearEvent)

        
}

function rollDice() {
    let numberList = []
    for (i=0;i<buttonContainer.children.length;){
        buttonContainer.children[i].remove()
    }
    let flipButton = document.createElement('button')
    flipButton.id = 'flip'
    buttonContainer.append(flipButton)
    let clearButton = document.createElement('button')
    clearButton.id = 'clear'
    buttonContainer.append(clearButton)
    gameTitle.textContent = 'Dice Roll Game'
    insertImages('dice')
    flipButton.textContent = 'Roll the die!'
    clearButton.textContent = 'Clear Scoreboard'
    insertScoreboard('dice')
    let one = 0
    let two = 0
    let three = 0
    let four = 0
    let five = 0
    let six = 0
    let streak = 1
    let longestStreak = 1
    const oneScore = document.getElementById('ones')
    const twoScore = document.getElementById('twos')
    const threeScore = document.getElementById('threes')
    const fourScore = document.getElementById('fours')
    const fiveScore = document.getElementById('fives')
    const sixScore = document.getElementById('sixs')
    const streakScore = document.getElementById('streak')
    const longestStreakScore = document.getElementById('longest-streak')
    function rollEvent() {
        if (longestStreak === 0){
            longestStreak++
        }
        streakScore.textContent = streak
        longestStreakScore.textContent = longestStreak
        let numberUp = Math.floor(Math.random() * 6)
        if (numberUp ===numberList.slice(-1)[0]){
            if (streak ===longestStreak){
                longestStreak++
            }
            streak++
            
            streakScore.textContent = streak
            longestStreakScore.textContent = longestStreak
        }
        else {
            streak = 1
            streakScore.textContent = streak
        }
        numberList.push(numberUp)
        console.log(numberUp)
        console.log(numberList.slice(-1))
        

        if (numberUp === 0) {
            one++
            oneScore.textContent = one
            selectAnimator('animation: diceAnimation .2s forwards 6.001;')
            message.textContent = 'Looks like a 1'
        }
        else if (numberUp === 1) {
            two++
            twoScore.textContent = two
            selectAnimator('animation: diceAnimation .2s forwards 6.175;')
            message.textContent = 'It appears to be a 2'
        }
        else if (numberUp === 2) {
            three++
            threeScore.textContent = three
            selectAnimator('animation: diceAnimation .2s forwards 6.34;')
            message.textContent = 'Zoinks! A wild 3!'
            
        }
        else if (numberUp === 3) {
            four++
            fourScore.textContent = four
            selectAnimator('animation: diceAnimation .2s forwards 6.512;')
            message.textContent = 'IV'
        }
        else if (numberUp === 4) {
            five++
            fiveScore.textContent = five
            selectAnimator('animation: diceAnimation .2s forwards 6.675;')
            message.textContent = 'I predicted you would roll a 5'
        }
        else if (numberUp === 5) {
            six++
            sixScore.textContent = six
            selectAnimator('animation: diceAnimation .2s forwards 5.99;')
            message.textContent = 'Lookin sixy ;)'
        }
    }
    flipButton.addEventListener('click', rollEvent)
    function clearEvent() {
        one = 0
        two = 0
        three = 0
        four = 0
        five = 0
        six = 0
        streak = 0
        longestStreak = 0
        oneScore.textContent = one
        twoScore.textContent = two
        threeScore.textContent = three
        fourScore.textContent = four
        fiveScore.textContent = five
        sixScore.textContent = six
        streakScore.textContent = streak
        longestStreakScore.textContent = longestStreak
        
    }
    clearButton.addEventListener('click', clearEvent)

}









function selectAnimator(animationDetails) {
    let selector = document.createElement('div');
    selector.classList.add('selector')
    selector.setAttribute('width', '200px')
    selector.setAttribute('style', animationDetails)
    imageContainer.append(selector);
    setTimeout(removeSelector, 1900)
    

}

function removeSelector() {
    for (let i=0;i<imageContainer.children.length;i++){
        if (imageContainer.children[i].className === 'selector') {
            imageContainer.children[i].remove()
        }
    }
}





rollDice()



