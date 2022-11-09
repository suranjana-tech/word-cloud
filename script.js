let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];
let wordsContainerEl = document.getElementById("wordsContainer");
let userInputEl = document.getElementById("userInput");
let errorMsgEl = document.getElementById("errorMsg");

let errorMsg = "Please enter a word";

function createSpanElement(value) {
    let spanEl = document.createElement("span");
    let fontSize = Math.ceil(Math.random() * 40) + "px";

    spanEl.textContent = value;
    spanEl.style.fontSize = fontSize;
    spanEl.classList.add("m-3");
    wordsContainerEl.appendChild(spanEl);
}

for (let value of wordCloud) {
    createSpanElement(value);
}

function appendInput() {
    let userInputWord = userInputEl.value;
    if (userInputEl.value === "") {
        errorMsgEl.textContent = errorMsg;
    } else {
        userInputEl.value = "";
        errorMsgEl.textContent = "";
        createSpanElement(userInputWord);

    }
}