// ECMA Script - ECMA это документация версий js
// ES5 - старый js
// ES6+ новый js

//<div class="cell"></div> с помощью js создаем данный div
// function createCell(){
//     const div = document.createElement("div"); //<div></div> пустой тег
//     div.className = "cell"; //<div class="cell"></div> атрибут class;  мы не можем создать переменныую с именем class тк это завервезированное слово
//     return div;
// }

// arrow function 
const createCell = () => {
    const div = document.createElement("div"); //<div></div> пустой тег
    div.className = "cell"; //<div class="cell"></div> атрибут class;  мы не можем создать переменныую с именем class тк это завервезированное слово
    return div;
}

const $app = document.querySelector("#app");

const cellCount = 260; 
for(let i = 0; i < cellCount; i++){
    const cell = createCell();
    $app.append(cell); //append добавляет html элемент
}

// const cells = document.querySelectorAll(".cell")
const cells = $app.getElementsByClassName("cell");

function getRandomColor() {
    const colors = ["#ffb7ce", "#89cff0", "#b2fba5", " #bdb0d0 ", " #bee7a5", " #ca9bf7 "];
    const randomIndex = Math.round(Math.random() * colors.length) - 1;
    return colors[randomIndex];
}
    
function setCellColor(event) {
    const cell = event.target;
    cell.style.transition = "";
    cell.style.backgroundColor = getRandomColor();
}

function resetCellColor(event){
    const cell = event.target;
    cell.style.backgroundColor = "#444";
    cell.style.transition = "2s ease-in-out";
}


for(const cell of cells){
    cell.addEventListener("mouseenter", setCellColor);
    cell.onmouseleave = resetCellColor;
}

// const button = document.querySelector("button");
// button.onclick = () => {
//     $app.innerHTML = "";
// }