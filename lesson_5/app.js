// DOM - Document Object Model переменную документ предоставляет браузер; функции - это тоже объект; объект может содержать в себе функцию

//  search

let $counter = document.getElementById("counter");
// $counter.innerText = "hello"; 

// let textStyles = {
//     color: "orange",
//     border: "15px dotted red",
//     padding: "15px 45px",
//     marginBottom: "20px",
// }

// Object.assign($counter.style, textStyles);



// $counter.style.color = "orange";
// $counter.style.border = "15px dotted red";
// $counter.style.padding = "15px 45px";
// $counter.style.marginBottom = "20px";

// DOM Manipulations - опервции с DOM
// search  Поиск элементов по id (самый предпочтительный) query - это 
// modify (inner content, styles, classes)
// remove
// create


// search:
let $decreaseButton = document.querySelector("#decrease")
// $decreaseButton.remove ();
let $resetButton = document.querySelector(".buttons #reset");
// $resetButton.textContent = "test";
let $increaseButton = document.querySelector(".buttons button:nth-child(3)")
// $increaseButton.remove ();

// KISS - keep it simple and stupid

// событие
//  function declaration
function increaseCounter(){
    // console.log("increase");
    let counter = Number ($counter.innerText);
    counter ++;
    $counter.innerText = counter;
    setCounterColor();
}
$increaseButton.addEventListener("click", increaseCounter);

// function decreaseCounter(){
//     let counter = Number ($counter.innerText);
//     counter --;
//     $counter.innerText = counter;
// };

// $decreaseButton.addEventListener("click", decreaseCounter)

$decreaseButton.onclick = function (){ //анонимные функции
    let counter = Number ($counter.innerText);
    counter --;
    $counter.innerText = counter;
    setCounterColor();
};

// function expression

let resetCounter = function(){
    $counter.innerText = "0";
    setCounterColor();
}

$resetButton.addEventListener("click", resetCounter)

function setCounterColor (){
    let counter = $counter.textContent;

    if(counter>0){
        $counter.style.color = "green";
    }else if(counter < 0){
        $counter.style.color = "red";
    }else {
        $counter.style.color = "cyan";
    }
}

