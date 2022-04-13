// Lijst met variabelen die nodig zijn om de Bingokaart te laten functioneren
var bOne = document.querySelector("tr:nth-of-type(1) > td:nth-of-type(1)");
var bTwo = document.querySelector("tr:nth-of-type(2) > td:nth-of-type(1)");
var bThree = document.querySelector("tr:nth-of-type(3) > td:nth-of-type(1)");
var bFour = document.querySelector("tr:nth-of-type(4) > td:nth-of-type(1)");
var bFive = document.querySelector("tr:nth-of-type(5) > td:nth-of-type(1)");

var iOne = document.querySelector("tr:nth-of-type(1) > td:nth-of-type(2)");
var iTwo = document.querySelector("tr:nth-of-type(2) > td:nth-of-type(2)");
var iThree = document.querySelector("tr:nth-of-type(3) > td:nth-of-type(2)");
var iFour = document.querySelector("tr:nth-of-type(4) > td:nth-of-type(2)");
var iFive = document.querySelector("tr:nth-of-type(5) > td:nth-of-type(2)");

var nOne = document.querySelector("tr:nth-of-type(1) > td:nth-of-type(3)");
var nTwo = document.querySelector("tr:nth-of-type(2) > td:nth-of-type(3)");
var nThree = document.querySelector("tr:nth-of-type(3) > td:nth-of-type(3)");
var nFour = document.querySelector("tr:nth-of-type(4) > td:nth-of-type(3)");
var nFive = document.querySelector("tr:nth-of-type(5) > td:nth-of-type(3)");

var gOne = document.querySelector("tr:nth-of-type(1) > td:nth-of-type(4)");
var gTwo = document.querySelector("tr:nth-of-type(2) > td:nth-of-type(4)");
var gThree = document.querySelector("tr:nth-of-type(3) > td:nth-of-type(4)");
var gFour = document.querySelector("tr:nth-of-type(4) > td:nth-of-type(4)");
var gFive = document.querySelector("tr:nth-of-type(5) > td:nth-of-type(4)");

var oOne = document.querySelector("tr:nth-of-type(1) > td:nth-of-type(5)");
var oTwo = document.querySelector("tr:nth-of-type(2) > td:nth-of-type(5)");
var oThree = document.querySelector("tr:nth-of-type(3) > td:nth-of-type(5)");
var oFour = document.querySelector("tr:nth-of-type(4) > td:nth-of-type(5)");
var oFive = document.querySelector("tr:nth-of-type(5) > td:nth-of-type(5)");

var gat = document.querySelector("div");

var tabel = document.querySelector("table")

var winner = document.querySelector("h2")

var winnerButton = document.querySelector("button:last-of-type")


// Functie die een random balletje trekt en deze vergelijkt met de kaart
function balletjesTrekken() {
    var currentNumber = Math.floor(Math.random() * 74) + 1;
    console.log(currentNumber);

    gat.classList.remove("dragging");

    // Schrijf nieuw nummer in balletje
    document.getElementById("huidigballetje").innerHTML = currentNumber;
    
    //Check of balletje matcht met kaart
    if (bOne.innerHTML == currentNumber) {
        console.log("B1");
        bOne.className = "Match";
    } else if (bTwo.innerHTML == currentNumber) {
        console.log("B2");
        bTwo.className = "Match";
    } else if (bThree.innerHTML == currentNumber) {
        console.log("B3");
       bThree.className = "Match";
    } else if (bFour.innerHTML == currentNumber) {
        console.log("B4");
        bFour.className = "Match";
    } else if (bFive.innerHTML == currentNumber) {
        console.log("B5");
        bFive.className = "Match";
    } else if (iOne.innerHTML == currentNumber) {
        console.log("I1");
        iOne.className = "Match";
    } else if (iTwo.innerHTML == currentNumber) {
        console.log("I2");
        iTwo.className = "Match";
    } else if (iThree.innerHTML == currentNumber) {
        console.log("I3");
        iThree.className = "Match";
    } else if (iFour.innerHTML == currentNumber) {
        console.log("I4");
        iFour.className = "Match";
    } else if (iFive.innerHTML == currentNumber) {
        console.log("I5");
        iFive.className = "Match";
    } else if (nOne.innerHTML == currentNumber) {
        console.log("N1");
        nOne.className = "Match";
    } else if (nTwo.innerHTML == currentNumber) {
        console.log("N2");
        nTwo.className = "Match";
    } else if (nThree.innerHTML == currentNumber) {
        console.log("N3");
        nThree.className = "Match";
    } else if (nFour.innerHTML == currentNumber) {
        console.log("N4");
        nFour.className = "Match";
    } else if (nFive.innerHTML == currentNumber) {
        console.log("N5");
        nFive.className = "Match";
    } else if (gOne.innerHTML == currentNumber) {
        console.log("G1");
        gOne.className = "Match";
    } else if (gTwo.innerHTML == currentNumber) {
        console.log("G2");
        gTwo.className = "Match";
    } else if (gThree.innerHTML == currentNumber) {
        console.log("G3");
        gThree.className = "Match";
    } else if (gFour.innerHTML == currentNumber) {
        console.log("G4");
        gFour.className = "Match";
    } else if (gFive.innerHTML == currentNumber) {
        console.log("G5");
        gFive.className = "Match";
    } else if (oOne.innerHTML == currentNumber) {
        console.log("O1");
        oOne.className = "Match";
    } else if (oTwo.innerHTML == currentNumber) {
        console.log("O2");
        oTwo.className = "Match";
    } else if (oThree.innerHTML == currentNumber) {
        console.log("O3");
        oThree.className = "Match";
    } else if (oFour.innerHTML == currentNumber) {
        console.log("O4");
        oFour.className = "Match";
    } else if (oFive.innerHTML == currentNumber) {
        console.log("O5");
        oFive.className = "Match";
    } else {
        console.log("NO MATCH");
    }
}

// Functie die checkt of de kaart een winnende rij heeft

function checkWinnaar() {
    //Check Winnaar Verticaal//
    if (bOne.className && bTwo.className && bThree.className && bFour.className && bFive.className == "Match") {
        console.log("WINNER!!!");
        tabel.className = "Winner";
        winner.className = "Gewonnen";
        winnerButton.className = "Gewonnen";
    } else if (iOne.className && iTwo.className && iThree.className && iFour.className && iFive.className == "Match") {
        console.log("WINNER!!!");
        tabel.className = "Winner";
        winner.className = "Gewonnen";
        winnerButton.className = "Gewonnen";
    } else if (nOne.className && nTwo.className && nThree.className && nFour.className && nFive.className == "Match") {
        console.log("WINNER!!!")
        tabel.className = "Winner";
        winner.className = "Gewonnen";
        winnerButton.className = "Gewonnen";
    } else if (gOne.className && gTwo.className && gThree.className && gFour.className && gFive.className == "Match") {
        console.log("WINNER!!!");
        tabel.className = "Winner";
        winner.className = "Gewonnen";
        winnerButton.className = "Gewonnen";
    } else if (oOne.className && oTwo.className && oThree.className && oFour.className && oFive.className == "Match") {
        console.log("WINNER!!!");
        tabel.className = "Winner";
        winner.className = "Gewonnen";
        winnerButton.className = "Gewonnen";
    //Check Winnaar Horizontaal//
    } else if (bOne.className && iOne.className && nOne.className && gOne.className && oOne.className == "Match") {
        console.log("WINNER!!!");
        tabel.className = "Winner";
        winner.className = "Gewonnen";
        winnerButton.className = "Gewonnen";
    } else if (bTwo.className && iTwo.className && nTwo.className && gTwo.className && oTwo.className == "Match") {
        console.log("WINNER!!!");
        tabel.className = "Winner";
        winner.className = "Gewonnen";
        winnerButton.className = "Gewonnen";
    } else if (bThree.className && iThree.className && nThree.className && gThree.className && oThree.className == "Match") {
        console.log("WINNER!!!");
        tabel.className = "Winner";
        winner.className = "Gewonnen";
        winnerButton.className = "Gewonnen";
    } else if (bFour.className && iFour.className && nFour.className && gFour.className && oFour.className == "Match") {
        console.log("WINNER!!!");
        tabel.className = "Winner";
        winner.className = "Gewonnen";
        winnerButton.className = "Gewonnen";
    } else if (bFive.className && iFive.className && nFive.className && gFive.className && oFive.className == "Match") {
        console.log("WINNER!!!");
        tabel.className = "Winner";
        winner.className = "Gewonnen";
        winnerButton.className = "Gewonnen";
    //Check Winaar Diagonaal//
    } else if (bOne.className && iTwo.className && nThree.className && gFour.className && oFive.className == "Match") {
        console.log("WINNER!!!");
        tabel.className = "Winner";
        winner.className = "Gewonnen";
        winnerButton.className = "Gewonnen";
    } else if (bFive.className && iFour.className && nThree.className && gTwo.className && oOne.className == "Match") {
        console.log("WINNER!!!");
        tabel.className = "Winner";
        winner.className = "Gewonnen";
        winnerButton.className = "Gewonnen";
    } else {
        console.log("NO WINNER");
    }
}

function dragStart() {
    gat.className = "dragging"
}

var reloadButton = document.querySelector("button:last-of-type");

// Herstart de game
function reload() {
    reload = location.reload();
}

// Eventlistener voor de herstart
reloadButton.addEventListener("click", reload);

// Eventlisteners voor een nieuw balletje trekken
document.getElementById("nieuwballetje").addEventListener("click", balletjesTrekken);
document.getElementById("nieuwballetje").addEventListener("click", checkWinnaar);

// Switch between Light and Dark Theme
// Bron: https://lukelowrey.com/css-variable-theme-switcher/
var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme)