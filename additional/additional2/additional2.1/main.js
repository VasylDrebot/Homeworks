// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.

let arr = [];

for (let s = 0; s < 100; s++) {
    const number = s % 2 === 0;
    if (number) {
        arr.push(s);
    }
}
console.log(arr);


// b. заповнити його 50 непарними числами за допомоги циклу.

for (let i = 0; i < 100; i++) {
    const number1 = i % 2 === 1;
    if (number1) {
        arr.push(i);
    }
}
console.log(arr);



// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

for (let m = 0; m < 20; m++) {
    arr.push(Math.round(Math.random()*20));
}
console.log(arr);


// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

for (let d = 0; d < 20; d++) {
    arr.push(Math.round(Math.random() * 732) + 8);
}
console.log(arr);

// 2. Вивести за допомогою console.log кожен третій елемент

for (let i = 2; i < arr.length; i+=3) {
    // console.log(arr[i]);
}


// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

for (let i = 0; i < arr.length; i+=3) {
    if (arr[i] % 2 === 0) {
        // console.log(arr[i]);
    }
}


// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

let newArr = [];

for (let i = 0; i < arr.length; i+=3) {
    if (arr[i] % 2 === 0) {
        newArr.push(arr[i]);
    }
}
console.log(newArr);



// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

let arrayNumbers = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
for (p = 0; p < arrayNumbers.length; p++) {
    if (arrayNumbers[p] % 2 === 0) {
        console.log(arrayNumbers[p - 1])
    }
}


// 6. Є масив з числами [100,250,50,168,120,345,188],
// Які характеризують вартість окремої покупки. Обрахувати середній чек.

let prices = [100,250,50,168,120,345,188];
let sum = 0;
for (let i = 0; i < prices.length; i++) {
    sum = sum + prices[i];
   let res = sum / prices.length;
    console.log(res);
}





// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let array1 = [];
let newArray = [];
for (let u = 0; u < 10; u++) {
    array1.push(Math.round(Math.random()* 5))
   console.log(array1)
    newArray.push(array1[u] * 5)
}
console.log(newArray)


// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому,
//    і якщо елемент є числом - додати його в інший масив.

let newArray1 = [8, 'contact', 'menu', false, 50, 68, 88, true, 'email', 'address', 35, 72, 48, 20, 10];
let newArray2 = [];
for (let m = 0; m < newArray1.length; m++) {
    if (typeof newArray1[m] === "number") {
        newArray2[m] = newArray1[m]
        console.log(newArray2[m])
    }

}


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];

    let citiesWithId = [
        {user_id: 3, country: 'USA', city: 'Portland'},
        {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
        {user_id: 2, country: 'Poland', city: 'Krakow'},
        {user_id: 4, country: 'USA', city: 'Miami'}
    ];

//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
    let usersWithCities = [
        {
            id: 1, // <===
            name: 'vasya',
            age: 31,
            status: false,
            address: {
                user_id: 1, // <===
                country: 'Ukraine',
                city: 'Ternopil'
            }
        },
        // TO BE CONTINUED .....
    ]

for (let i = 0; i < usersWithId.length; i++) {
    let userEl = usersWithId[i];
    for (let cityEl of citiesWithId) {
        if (userEl.id === cityEl.user_id) {
            userEl.cityEl = cityEl;
        }
    }
}
console.log(usersWithId);



// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let array = [5, 56,293, 652, 735, 850, 922, 1012, 1569,1633];
for (i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        console.log(array[i])
    }
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
//   За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

let arr1 = [8, 9, 5, 28, 35, 55, 68, 79, 85, 92];
let arr2 = [];
for (a = 0; a < arr1.length; a++) {
    arr2[a] = arr1[a];

}
console.log(arr2)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let letters = [ 'a', 'b', 'c'];
let res = '';
for (f = 0; f < letters.length; f++) {
    res += letters[f];
}
console.log(res)


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let res1 = '';
let g = 0;
while (g < letters.length) {
    res1 += letters[g]
    g++;
}
console.log(res1)


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let res2 = '';
for (const lettersElement of letters) {
    res2 += lettersElement;
}
console.log(res2)
















