var POUND = 0.75; // usd to gbp
var EURO = 0.89; // usd to euro
var RUBL = 84; // usd to rubl

var elForm = document.querySelector(".main__form");
var elInput = document.querySelector(".main__input");
var elSelect = document.querySelector(".main__select");
var elBtn = document.querySelector(".main__btn");
var elText = document.querySelector(".main__text");

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault(); // get off
    
    if (elSelect.value == "pound") {
        elText.textContent = elInput.value * POUND + elSelect.value; // ... * 0.75pound
    }else if (elSelect.value == "euro") {
        elText.textContent = elInput.value * EURO + elSelect.value; // ... * 0.89euro
    }else {
        elText.textContent = elInput.value * RUBL + elSelect.value; // ... * 84rubl 
    }
})