// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає
//   або конкатенує їх між собою.

// function getArguments () {
//     if (arguments.length === 1) {
//         console.log(arguments)
//     } else if (arguments.length === 2) {
//         console.log(arguments[0] + arguments[1])
//     }
// }
//
//
// getArguments(2);
//
//
// getArguments(5,'6');





// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами
//   та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4];
//     [2,3,4,5]
// результат
//     [3,5,7,9]


let arrayNumbers = [1,2,3,4];
let arrayNumbers1 = [2,3,4,5];

function getSum (arr1, arr2) {
    let arrSum = [];

    for (let index = 0; index < arr1.length; index++) {
        const arr1El = arr1[index];
        const arr2El = arr2[index];
        const sum = arr1El + arr2El;
        arrSum.push(sum);

        arrSum.push(arr1[index] + arr2[index]);
    }

    return arrSum;
}

let sumResult = getSum(arrayNumbers, arrayNumbers1);
console.log(sumResult);









// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// let arrayObj = [{name: 'Kate', age: 28, model: 'Toyota'}]
// function getKey (arrayObject) {
//     let emptyArray = [];
//     for (let i = 0; i < arrayObject.length; i++) {
//         for (const arrayObjKey in arrayObject[i]) {
//             emptyArray.push(arrayObjKey);
//         }
//     }
//     return emptyArray;
// }
//
// let arrRes = getKey(arrayObj);
// console.log(arrRes);




// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]


// let arrayObj1 = [{name: 'Marry', age: 27},  {model: 'Mitsubishi'}]
// function getValue (arrayObj1) {
//     let emptyArr1 = []
//     for (let arrayObjElem of arrayObj1) {
//         for (let arrayObjElemKey in arrayObjElem) {
//             emptyArr1.push(arrayObjElem[arrayObjElemKey])
//         }
//     }
//     return emptyArr1;
// }
//
// let numValue = getValue(arrayObj1);
// console.log(numValue);


