// Data Types - типы данных
// 1. numbers - числовой (1,2,3..)
// 2. strings - текстовой ("1")
// 3. boolean - логический (булевский)
// 4. undefined - неопределенный - js автоматически присваивает (V8)
// 5. null - т.е. то чего нет, например мужа/жены в графе статусе (представляет отсутствие какого-либо объектного значения)
// 6. object - объект (контейнер для других типов данных) (= ассоциативный массив)
// 7.bigint - 
// 8.symbol - 

// object examples:
// key (ключи) - value (значение)
let geeksStudent = {
    name: "Daria",
    surname: "Chebakova",
    telegram: "@ch_daria",
    age: 18,
    phone: "=996700890099",
    course: null,
};

let phoneBook = {
    Mom: "8888888",
    Dad:  "7777777",
    Sister: "55555555",
    Boss: "444444444",
};

console.log("Call mom...", phoneBook.Mom)
console.log("Call Dad...", phoneBook["Dad"])

// Array - массивы

let points = [10, 9, 8, 7, 6, 5, 4, 3];
// массивы начинаются с 0; 
//             0  1  2  3  4  5  6  7  indexes - Индексы
console.log(points.length);
console.log("1st HW", points[0]);

let total = 0;
total += points[0] //total = total + points[0]
total += points[1]
total += points[2]
total += points[3]

console.log("Total:", total)

// Loops - Петля, циклы
// for...of
for (let point of points) {
    total += point;
}
console.log("Total:", total);

let operations = [25000, -4000, -500, +7000, -700, -10000];

let incomes = 0;
let expenses = 0;

for (let operation of operations){
    if(operation>0){
        incomes += operation;
    } else {
        expenses += Math.abs(operation); // abs - абсолютные значение (модуль); Math модуль отвечающий за математические операции
    }
}

console.log("Incomes:", incomes, "Expenses:", expenses);