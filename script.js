// Dice Roller

function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(die = 0; die < numOfDice; die++){
        const value = Math.floor(Math.random() * 6) + 1;
       values.push(value)
       images.push(`<img src="dice_images/${value}.jpg">`)
    }

    diceResult.textContent = `dice: ${values.join(", ")}`;
    diceImages.innerHTML = images.join('');
}

