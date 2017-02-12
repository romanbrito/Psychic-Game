var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomElement(min, max, ArrOfElements) {
    var ComputerChoose = ArrOfElements[getRandomIntInclusive(min, max)];
    return ComputerChoose;
}
//create DOM element with text in Id("p", "Guessfar" "hello world")
function createDOMelement(element, IdDiv, SomeText) {
    var newElement = document.createElement(element);
    newElement.innerHTML = SomeText;
    document.getElementById(IdDiv).appendChild(newElement);

}
//modify DOM element with Id("Wins", "1")
function modifyDOMelement(elementId, SomeText) {
    var theElement = document.getElementById(elementId);
    theElement.innerHTML = SomeText;
}

// define global variables
    var win = 0;
    var loss = 0;
    var gLeft = 9;

//gets keyboard keyup and retruns value
document.onkeyup = function keyWasPressed(evt) {
    
    var letter = String.fromCharCode(event.keyCode).toLowerCase();
    
    var RandomLetter = getRandomElement(0, 25, letters).toLowerCase();
    console.log(RandomLetter);

    if (letter === RandomLetter) {
      console.log("win");
        win++;
        modifyDOMelement("Wins", win);
    }

    gLeft--;
    if (gLeft === 0) {
        console.log("you lose");
        loss++;
        modifyDOMelement("Loss", loss);
        gLeft = 9;
    }

    modifyDOMelement("GuessLeft", gLeft);
    console.log("guesses left " + gLeft)

    createDOMelement("span", "GuessFar", letter + ", ");
}
