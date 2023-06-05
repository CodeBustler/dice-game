function diceGame() {
    // Two Random Numbers
    let randomNum1 = Math.floor(Math.random() * 6) + 1;
    let randomNum2 = Math.floor(Math.random() * 6) + 1;

    // Adding Random Number for different Images
    let randomDice1 = `./img/dice${randomNum1}.png`
    let randomDice2 = `./img/dice${randomNum2}.png`

    // Target Player 1 & Player 2 Dice
    let diceImage1 = document.getElementById("p1");
    let diceImage2 = document.getElementById("p2");

    // Changing Different Dices using random Dice Images
    diceImage1.setAttribute("src", randomDice1)
    diceImage2.setAttribute("src", randomDice2)

    // Display Result
    let result = document.getElementById("result")
    let p1_Box = document.querySelector(".player-1")
    let p2_Box = document.querySelector(".player-2")

    if (randomNum1 > randomNum2) {
        result.innerHTML = "Player 1 Winner !"
        result.style.color = "#05BFDB"
        p1_Box.style.borderColor = '#05BFDB'
        p2_Box.style.borderColor = '#2C2C2C'

    } else if (randomNum1 == randomNum2) {
        result.innerHTML = "Draw !"
        result.style.color = "yellowgreen"
        p1_Box.style.borderColor = 'yellowgreen'
        p2_Box.style.borderColor = 'yellowgreen'

    } else {
        result.innerHTML = "Player 2 Winner !"
        result.style.color = "darkorange"
        p2_Box.style.borderColor = 'darkorange'
        p1_Box.style.borderColor = '#2C2C2C'
    }

}
// End JavaScript