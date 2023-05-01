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
    userNumbersArray = []
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
let takeUserNumbers = document.getElementById("takeUserNumbers")
let userNumbersArray = []
let score = 0
// if (userNumbersArray.length < 5){
    takeUserNumbers.addEventListener("click", function insertNumbers() {
        let inputNumber = document.getElementById("inputNumber")
        let verifyInputNumber = false
        inputNumber = inputNumber.value
        userNumbersArray.push(inputNumber)
        for (let i = 0; i < randomNumbersArray.length; i++) {
            const randomNumber = randomNumbersArray[i];
            if (inputNumber == randomNumber) {
                verifyInputNumber = true
            }
        }
        if (verifyInputNumber === true){
            timedBox.innerHTML += `<p class= "textGreen"> ${inputNumber} </p>` 
            score = score+1
    
        }else if(verifyInputNumber === false) {
            timedBox.innerHTML += `<p class= "textRed"> ${inputNumber} </p>` 
    
        }
        
        // if (userNumbersArray.length > 4) {
        //     for (let i = 0; i < userNumbersArray.length; i++) {
        //     const userNumber = userNumbersArray[i];
        //     timedBox.innerHTML += `<p> ${userNumber} </p>`
            
        // }
        // }
        if (userNumbersArray.length > 4){
            timedBox.innerHTML += `<p id="score" class="positionAbsolute">Il tuo punteggio:${score} </p>`
            }
    })

// }
// All'inserimento del quinto numero verifico