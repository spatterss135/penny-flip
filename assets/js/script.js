// TODO: Declare any global variables we need
let heads = 0
let tails = 0

document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    const pennyImage = document.querySelector('img')
    const flipButton = document.querySelector('#flip')
    const clearButton = document.querySelector('#clear')
    const headsScore = document.querySelector('#heads')
    const tailsScore = document.querySelector('#tails')
    const headsPct = document.querySelector('#heads-percent')
    const tailsPct = document.querySelector('#tails-percent')
    let message = document.querySelector('.message-container')


    flipButton.addEventListener('click', function() {
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


    })

    clearButton.addEventListener('click', function() {
        heads = 0
        tails = 0
        headsScore.textContent = heads
        tailsScore.textContent = tails
        headsPct.textContent = '0%'
        tailsPct.textContent =  '0%'

    })


    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})
