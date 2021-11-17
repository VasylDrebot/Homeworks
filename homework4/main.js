// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function calcSquare (a, b) {
    let square = a * b;
    return square;
}

let resSquare = calcSquare(5, 6);
console.log(resSquare);


// - створити функцію яка обчислює та повертає площу кола з радіусом r

function calcRoundSquare (r) {
    const p = 3.14;
    let square1 = p * (r**2);
    return square1;
}

let resSquare1 = calcRoundSquare(3);
console.log(resSquare1);



// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function calcSquare1 (r, h) {
    const p = 3.14;
    let square2 = 2 * p * r * h;
    return square2;
}

let resSquare2 = calcSquare1(5, 6);
console.log(resSquare2);


// - створити функцію яка приймає масив та виводить кожен його елемент

function showItem (array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

showItem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);




// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function createText (text) {
    document.write(`<p>${text}</p>`)
}

createText(`Lorem ipsum dolor sit amet`);



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createList (text2) {
    document.write(`<ul>`);
    document.write(`<li>${text2}</li>`);
    document.write(`<li>${text2}</li>`);
    document.write(`<li>${text2}</li>`);
    document.write(`</ul>`);
}

createList('item');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


function createList2 (size, content) {
    document.write(`<ul>`);
    for (let i = 0; i < size; i++) {
        document.write(`<li>${content}</li>`);
    }
    document.write(`</ul>`);
}

createList2(3, 'element');


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function createList2 (array1) {
    document.write(`<ul>`);
    for (let i = 0; i < array1.length; i++) {
        let arrElem = array1[i];
        document.write(`<li>${arrElem}</li>`);
    }
    document.write(`</ul>`);
}

createList2([5, 9, true, 'contact', 'email', false, 16, 'info']);



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
//   Для кожного об'єкту окремий блок.

function createList3 (array2) {
    for (let array2Element of array2) {
            document.write(`<div>${array2Element.id} - ${array2Element.name} - ${array2Element.age} - </div>`);
    }
}

createList3([{id: 1, name: 'Kate', age: 20}, {id: 2, name: 'Michael', age: 16}, {id: 3, name: 'Tom', age: 33}]);
