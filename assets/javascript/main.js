const numberOfDie = document.querySelector('#userDieInput')
const rollButton= document.querySelector('#rollButton')
const dieTotal = document.querySelector('#rollTotal')
const showRolls = document.querySelector('#showRolls')
const diceList = document.querySelector('#diceList')
// ^Declares variables to the HTML elements IDs.

rollButton.addEventListener('click', function () {
    console.log('Roll button clicked.');

    const userInput = numberOfDie.value;
        console.log('User input:')
        console.log(userInput)

    let position = 1
    while (position <= Number(userInput)) {
        
        let randomRolls = Math.floor(Math.random() * 6) + 1; //https://stackoverflow.com/a/4960020
            console.log('Random 1-6')
            console.log(randomRolls)

        let newTotal = Number (randomRolls) + Number (dieTotal.innerHTML)
            console.log('New total:')
            console.log(newTotal)

        dieTotal.innerHTML = newTotal

    position += 1
        
    }   
    
})

