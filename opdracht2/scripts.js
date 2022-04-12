var bOne = document.querySelector("tr:nth-of-type(1) > td:nth-of-type(1)").innerHTML;
var bTwo = document.querySelector("tr:nth-of-type(2) > td:nth-of-type(1)").innerHTML;
var bThree = document.querySelector("tr:nth-of-type(3) > td:nth-of-type(1)").innerHTML;
var bFour = document.querySelector("tr:nth-of-type(4) > td:nth-of-type(1)").innerHTML;
var bFive = document.querySelector("tr:nth-of-type(5) > td:nth-of-type(1)").innerHTML;

var iOne = document.querySelector("tr:nth-of-type(1) > td:nth-of-type(2)").innerHTML;
var iTwo = document.querySelector("tr:nth-of-type(2) > td:nth-of-type(2)").innerHTML;
var iThree = document.querySelector("tr:nth-of-type(3) > td:nth-of-type(2)").innerHTML;
var iFour = document.querySelector("tr:nth-of-type(4) > td:nth-of-type(2)").innerHTML;
var iFive = document.querySelector("tr:nth-of-type(5) > td:nth-of-type(2)").innerHTML;

var nOne = document.querySelector("tr:nth-of-type(1) > td:nth-of-type(3)").innerHTML;
var nTwo = document.querySelector("tr:nth-of-type(2) > td:nth-of-type(3)").innerHTML;
var nThree = document.querySelector("tr:nth-of-type(3) > td:nth-of-type(3)").innerHTML;
var nFour = document.querySelector("tr:nth-of-type(4) > td:nth-of-type(3)").innerHTML;
var nFive = document.querySelector("tr:nth-of-type(5) > td:nth-of-type(3)").innerHTML;

var gOne = document.querySelector("tr:nth-of-type(1) > td:nth-of-type(4)").innerHTML;
var gTwo = document.querySelector("tr:nth-of-type(2) > td:nth-of-type(4)").innerHTML;
var gThree = document.querySelector("tr:nth-of-type(3) > td:nth-of-type(4)").innerHTML;
var gFour = document.querySelector("tr:nth-of-type(4) > td:nth-of-type(4)").innerHTML;
var gFive = document.querySelector("tr:nth-of-type(5) > td:nth-of-type(4)").innerHTML;

var oOne = document.querySelector("tr:nth-of-type(1) > td:nth-of-type(5)").innerHTML;
var oTwo = document.querySelector("tr:nth-of-type(2) > td:nth-of-type(5)").innerHTML;
var oThree = document.querySelector("tr:nth-of-type(3) > td:nth-of-type(5)").innerHTML;
var oFour = document.querySelector("tr:nth-of-type(4) > td:nth-of-type(5)").innerHTML;
var oFive = document.querySelector("tr:nth-of-type(5) > td:nth-of-type(5)").innerHTML;

function balletjesTrekken() {
    var currentNumber = Math.floor(Math.random() * 74) + 1;
    console.log(currentNumber);

    // Schrijf nieuw nummer in balletje
    document.getElementById("huidigballetje").innerHTML = currentNumber;
    
    //Check of balletje matcht met kaart
    if (bOne == currentNumber) {
        console.log("B1");
        document.querySelector("tr:nth-of-type(1) > td:nth-of-type(1)").className = "Match";
    } else if (bTwo == currentNumber) {
        console.log("B2");
        document.querySelector("tr:nth-of-type(2) > td:nth-of-type(1)").className = "Match";
    } else if (bThree == currentNumber) {
        console.log("B3");
        document.querySelector("tr:nth-of-type(3) > td:nth-of-type(1)").className = "Match";
    } else if (bFour == currentNumber) {
        console.log("B4");
        document.querySelector("tr:nth-of-type(4) > td:nth-of-type(1)").className = "Match";
    } else if (bFive == currentNumber) {
        console.log("B5");
        document.querySelector("tr:nth-of-type(5) > td:nth-of-type(1)").className = "Match";
    } else if (iOne == currentNumber) {
        console.log("I1");
        document.querySelector("tr:nth-of-type(1) > td:nth-of-type(2)").className = "Match";
    } else if (iTwo == currentNumber) {
        console.log("I2");
        document.querySelector("tr:nth-of-type(2) > td:nth-of-type(2)").className = "Match";
    } else if (iThree == currentNumber) {
        console.log("I3");
        document.querySelector("tr:nth-of-type(3) > td:nth-of-type(2)").className = "Match";
    } else if (iFour == currentNumber) {
        console.log("I4");
        document.querySelector("tr:nth-of-type(4) > td:nth-of-type(2)").className = "Match";
    } else if (iFive == currentNumber) {
        console.log("I5");
        document.querySelector("tr:nth-of-type(5) > td:nth-of-type(2)").className = "Match";
    } else if (nOne == currentNumber) {
        console.log("N1");
        document.querySelector("tr:nth-of-type(1) > td:nth-of-type(3)").className = "Match";
    } else if (nTwo == currentNumber) {
        console.log("N2");
        document.querySelector("tr:nth-of-type(2) > td:nth-of-type(3)").className = "Match";
    } else if (nThree == currentNumber) {
        console.log("N3");
        document.querySelector("tr:nth-of-type(3) > td:nth-of-type(3)").className = "Match";
    } else if (nFour == currentNumber) {
        console.log("N4");
        document.querySelector("tr:nth-of-type(4) > td:nth-of-type(3)").className = "Match";
    } else if (nFive == currentNumber) {
        console.log("N5");
        document.querySelector("tr:nth-of-type(5) > td:nth-of-type(3)").className = "Match";
    } else if (gOne == currentNumber) {
        console.log("G1");
        document.querySelector("tr:nth-of-type(1) > td:nth-of-type(4)").className = "Match";
    } else if (gTwo == currentNumber) {
        console.log("G2");
        document.querySelector("tr:nth-of-type(2) > td:nth-of-type(4)").className = "Match";
    } else if (gThree == currentNumber) {
        console.log("G3");
        document.querySelector("tr:nth-of-type(3) > td:nth-of-type(4)").className = "Match";
    } else if (gFour == currentNumber) {
        console.log("G4");
        document.querySelector("tr:nth-of-type(4) > td:nth-of-type(4)").className = "Match";
    } else if (gFive == currentNumber) {
        console.log("G5");
        document.querySelector("tr:nth-of-type(5) > td:nth-of-type(4)").className = "Match";
    } else if (oOne == currentNumber) {
        console.log("O1");
        document.querySelector("tr:nth-of-type(1) > td:nth-of-type(5)").className = "Match";
    } else if (oTwo == currentNumber) {
        console.log("O2");
        document.querySelector("tr:nth-of-type(2) > td:nth-of-type(5)").className = "Match";
    } else if (oThree == currentNumber) {
        console.log("O3");
        document.querySelector("tr:nth-of-type(3) > td:nth-of-type(5)").className = "Match";
    } else if (oFour == currentNumber) {
        console.log("O4");
        document.querySelector("tr:nth-of-type(4) > td:nth-of-type(5)").className = "Match";
    } else if (oFive == currentNumber) {
        console.log("O5");
        document.querySelector("tr:nth-of-type(5) > td:nth-of-type(5)").className = "Match";
    } else {
        console.log("NO MATCH");
    }

    if (document.querySelector("tr:nth-of-type(1) > td:nth-of-type(1)").className = document.querySelector("tr:nth-of-type(2) > td:nth-of-type(1)").className = document.querySelector("tr:nth-of-type(3) > td:nth-of-type(1)").className = document.querySelector("tr:nth-of-type(4) > td:nth-of-type(1)").className = document.querySelector("tr:nth-of-type(5) > td:nth-of-type(1)").className = "Match" ) {
        console.log("BINGO!!!")
    }
}

document.getElementById("nieuwballetje").addEventListener("click", balletjesTrekken);