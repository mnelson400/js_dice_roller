const numberOfDie = document.querySelector('#userDieInput');
const rollButton = document.querySelector('#rollButton');
const dieTotal = document.querySelector('#rollTotal');
const showRolls = document.querySelector('#showRolls');
const diceList = document.querySelector('#allRolls');
const reseButton = document.querySelector('#resetButton');

let dieRolls = [];

rollButton.addEventListener('click', function () {

    const userInput = numberOfDie.value;

    let position = 1;

    while (position <= Number(userInput)) {
            
        let randomRolls = Math.floor(Math.random() * 6) + 1; //https://stackoverflow.com/a/4960020

        showArray.push(randomRolls);

        let newTotal = Number(randomRolls) + Number(dieTotal.innerHTML);

        dieTotal.innerHTML = newTotal;

        dieRolls.push(newTotal);

    position += 1;

    }   
    
})


let showArray = [];

showRolls.addEventListener('click', function(){
    
    let position = 0;

    while (position < dieRolls.length) {

        const diceArray = '<li class="die">'+ showArray[position] +'</li>';

        allRolls.innerHTML += diceArray;

    position += 1;

    }

})

