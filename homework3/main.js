// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let numbers = [55, 86, -92, 65.3, 508];
console.log(numbers);
let cars = ['BMW', 'Mercedes', 'Range Rover', 'Audi', 'Porsche'];
console.log(cars);
let arr = [30, -3, 'String', true, 2.8];
console.log(arr);


// Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let array = [];
array[0] = 28;
array[1] = 'user';
array[2] = true;
array[3] = 5.25;
array[4] = 'info';
array[5] = false;
console.log(array);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.write('<div>Container</div>')
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
document.write(`<div>Content ${i}</div>`)
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let i = 0;
while (i < 20) {
    document.write('<h1>Title</h1>')
    i++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let a = 0;
while (a < 20) {
    document.write(`<h1>Info ${a}</h1>`)
    a++;
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let numbers1 = [3,  6, -9, 18, -25, 36, 52.3, 60, 83, 91];

for (let f = 0; f < numbers1.length; f++) {
    console.log(numbers1[f]);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let arrString = ['Greece', 'Turkey', 'Spain', 'Italy', 'France', 'Germany', 'Austria', 'Slovakia', 'Portugal', 'Ireland'];
for (c = 0; c < arrString.length; c++) {
    console.log(arrString[c]);
}


// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let anyArray = ['Madrid', true, 16, 985, -52, false, 510, 'Rome', 'Munich', 895];
for (d = 0; d < anyArray.length; d++) {
    console.log(anyArray[d])
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
//   За допомогою if та typeof вивести тільки булеві елементи

let anyArray1 = ['river', true, 2, 8, 19, -35, false, 'lake', 29, 86.5];
for (l = 0; l < anyArray1.length; l++) {
    if (typeof anyArray1[l] === 'boolean')
        console.log(anyArray1[l])
}


// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
//   За допомогою if та typeof вивести тільки числові елементи
let anyArray2 = [28, 45, 30.5, false, 'capital', true, 80, 'city', 'country', 65];
j = 0;
while (j < anyArray2.length) {
    if (typeof anyArray2[j] === "number")
        console.log(anyArray2[j])
    j++;
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
//   За допомогою if та typeof вивести тільки рядкові елементи

let anyArray3 = ['Kate', 'Marry', false, 516, 253, true, 20.56, 'Michael', 'Alice', 'Nick'];
m = 0;
while (m < anyArray3.length) {
    if (typeof anyArray3[m] === "string")
        console.log(anyArray3[m])
    m++;
}



// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
//   Вивести в консоль всі його елементи в циклі.

let emptyArray = [];
emptyArray[0] = 'contact';
emptyArray[1] = 'email';
emptyArray[2] = true;
emptyArray[3] = 12;
emptyArray[4] = 31;
emptyArray[5] = false;
emptyArray[6] = 29;
emptyArray[7] = 'check';
emptyArray[8] = 50;
emptyArray[9] = 82;
for (e = 0; e < emptyArray.length; e++) {
    console.log(emptyArray[e])
}


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (t = 0; t < 10; t++) {
    console.log(`${t}`)
    document.write(`${t}`)
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (g = 0; g < 100; g++) {
    console.log(`${g}`)
    document.write(`${g}`)
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (z = 0; z < 100; z += 2) {
    console.log(`${z}`)
    document.write(`${z}`)
}


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (y = 0; y < 100; y++) {
    if (y % 2 === 0)
        console.log(`${y}`)
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (s = 0; s < 100; s++) {
    if (s % 2 === 1) {
        console.log(`${s}`)
    }
}



