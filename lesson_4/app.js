let students = ["Alina", "Pavel", "Azat"];
// indexes       0        1        2

let studentsAsObject = {
    0: "Alina",
    1: "Pavel",
    2: "Azat",
    length: 3
}
console.log(typeof students);
console.log(students);

let carInfo = {
    brand: "BMW",
    model: "X5",
    engineVolume: 5000,
    color: "black",
    allowShadows: true
}

printSpliter()
console.log("My car is " + carInfo.brand + " "+ carInfo["model"])
console.log("First student:", students[0]);
console.log("I have " + students.length + " students");

// Functions = функции - множество микродействий которые в общем соедены в одно действие
// DRY - dont repeat yourself

// hoisting - всплытие функци    наверх по коду
function printSpliter(){
    console.log("-".repeat(15));
} 

// numbers -> [1,2,3,4,5]
// считает среднее арифметическое:
function getMean(numbers = []){
    let sum = 0;
    for(let num of numbers){
        sum += num;
    }
    let mean = sum / numbers.length;

    if(isNaN(mean) === NaN) return 0;

    return mean;
}

// mean - среднее арифвметирческое = число, равное сумме всех чисел множества, делённой на их количество
// алгоритм - последовательность действий который приводит к результату

// getFromRange (1,5) -> [1 2 3 4 5]
function getFromRange(start, end){
    let result = [];
    //for(let i = 0; i < 8; i++) { //цикл со счетчиком let i = 0   - i - itteration и он равен 0; i < 8 -останавливает цикл на 8; 1++ это увеличение на 1 похоже на i += 1
    for(let i = start; i <= end; i++) {
        result.push(i); // push добавляет новый элемент в массив
    }    
    //console.log("Урок №" + i);
    return result;
}

// 123 ->321
function reverseString(text){
    let newText = "";
    for(let i = text.length - 1; i >=0; i--) {
        newText += text[i];
    }
    return newText;
}

function reverseV2(text){
    return text.split("").reverse().join("");
}



