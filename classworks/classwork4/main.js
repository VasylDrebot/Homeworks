// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function theSmallestNumber (a, b, c) {
    if (a < b && a < c) {
        return a;
    } else if (b < a && b < c) {
        return b;
    } else if (c < a && c < b) {
        return c;
    }
}

let result = theSmallestNumber(25, 18, 12);
console.log(result);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function theBiggestNumber (a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else if (c > a && c > b) {
        return c;
    }
}

let result1 = theBiggestNumber(25, 36, 12);
console.log(result1);


// - створити функцію яка повертає найбільше число з масиву
let numbers = [5, 8, 9, 3, 6, 19, 28, 92, 1015, 202, 505];
// function getTheBiggestNumber (array) {
//     return Math.max.apply(null, array);
// }
//
// let result2 = getTheBiggestNumber(numbers);
// console.log(result2);


function getTheBiggestNumber (array) {
    let maxNumber = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxNumber) {
            maxNumber = array[i];
        }
    }
    return maxNumber;
}

let result2 = getTheBiggestNumber(numbers);
console.log(result2);







// - створити функцію яка повертає найменьше число з масиву

let numbers1 = [8, 95, 68, 218, -5.18, 0.25, 89, 1920, 657, 976, 10.16, 690, 5];
// function getTheSmallestNumber (array1) {
//     return Math.min.apply(null, array1);
// }
//
// let result3 = getTheSmallestNumber(numbers1);
// console.log(result3);


function getTheSmallestNumber (array1) {
    for (let i = 0; i < array1.length; i++) {
        let minNumber = array1[0];
        if (array1[i] < minNumber) {
            minNumber = array1[i]
            return minNumber;
        }
    }


}
//
let result3 = getTheSmallestNumber(numbers1);
console.log(result3);









// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let numbers2 = [9, 89, 68, 218, 18, 6, 25, 89, 1920, 657, 976, 10, 690, 5];

function calcSum (array2) {
    let counter = 0;
    for (let i = 0; i < array2.length; i++) {

        counter = counter + array2[i];

    }
    return counter;
}

let calcRes = calcSum(numbers2);
console.log(calcRes);




// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let numbers3 = [5, 9, 16];

function getMiddleValue (array3) {
    let value = 0;
    for (let i = 0; i < array3.length; i++) {
        value = value + array3[i];
    }
    return value/array3.length;
}

let valueResult = getMiddleValue(numbers3);
console.log(valueResult);





// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
//   а виводить найбільше (Math використовувати заборонено);
let arrayNumbers = [5, 8, 9];
function getMaxNumber (arrayNum) {
    let maxNum = arrayNum[0];
    let minNum1 = arrayNum[0];
    for (let i = 0; i < arrayNum.length; i++) {
        if (arrayNum[i] > maxNum) {
            maxNum = arrayNum[i];
        } else if (arrayNum[i] < minNum1) {
            minNum1 =arrayNum[i];

        }
    }
    console.log(maxNum);
    return minNum1;


}

getMaxNumber(arrayNumbers);









// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.)

function fillRandomNumbers (size) {
    let p = [];
    for (let i = 0; i < size; i++) {
       p[i] = Math.round(Math.random() * 100)
    }
    console.log(p);
}

fillRandomNumbers(10);



// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
//   limit - аргумент, який характеризує кінцеве значення діапазону.

function fillRandomNumbers2 (size, limit) {
    let f = [];
    for (let i = 0; i < size; i++) {
        f[i] = Math.round(Math.random() * limit)
    }
    console.log(f)
}

fillRandomNumbers2(30, 1000);


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let arrNumbers = [2, 5, 9, 17, 92, 63, 78, 53]
function getNewArray (arr) {
    let newArray = [];
    let start = 0;
    for (let i = arr.length-1; i >=0; i--) {
        newArray[start] = arr[i];
        start++;
    }
    return newArray;
}

let newArrNumbers = getNewArray(arrNumbers);
console.log(newArrNumbers);



