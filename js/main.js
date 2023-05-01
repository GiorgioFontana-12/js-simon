// Creo una funzione che genera un array di 5 numeri casuali
let randomNumbersArray = []
function randomNumbers() {
    while (randomNumbersArray.length < 5) {
        let randomNumber = Math.floor(Math.random() * 1000);
        if (randomNumbersArray.includes(randomNumber)) {
        }else{
            randomNumbersArray.push(randomNumber)
        }
    }
}

// Creo un bottone che trigghera la funzione e mi restituisce i numeri a schermo per 30 secondi
let timedBox = document.getElementById("timedBox")
let playButton = document.getElementById("startButton")
playButton.addEventListener("click", function startGame() {
    timedBox.innerHTML = "";
    // while (randomNumbersArray.length < 5) {
    //     let randomNumber = Math.floor(Math.random() * 1000);
    //     if (randomNumbersArray.includes(randomNumber)) {
    //     }else{
    //         randomNumbersArray.push(randomNumber)
    //     }
    // }
    randomNumbersArray=[]
    randomNumbers()
    for (let i = 0; i < randomNumbersArray.length; i++) {
        const randomNumber = randomNumbersArray[i];
        timedBox.innerHTML += `<p> ${randomNumber} </p>`
        console.log(randomNumber)
    }
    // timedBox.innerHTML = (randomNumbersArray)
} )
// Creo un bottone che inserisce in un array

// All'inserimento del quinto numero verifico