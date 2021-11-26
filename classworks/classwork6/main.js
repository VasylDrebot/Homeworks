// - Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'

// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let getNormalName = (str) => {
    let newName = str
        .replaceAll('..', ' ')
        .replaceAll('---', ' ')
        .replaceAll('__', ' ')
    return newName;
}
console.log(getNormalName(n3));





//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let randomNumber = (arr) => {
    for (let i = 0; i < 20; i++) {
        arr.push(Math.round(Math.random() * 100))
    }
    return arr;
}

let array = randomNumber([]);
console.log(array);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//   Відсортувати його за допомоги sort

array.sort((a, b) => a - b);
console.log(array);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//   відфільтрувати  його за допомоги filter, залишивши тільки парні числа

let num = array.filter(value => {
    return value % 2 === 0;
})
console.log(num);


// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.



let res = array.map(value => {
    return value.toString();
})
console.log(res);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
//   або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

let nums = [11,21,3];
let sortNums = (arrNum, direction) => {
    if (direction === 'asc') {
        let arr1 = arrNum.sort((a, b) => a-b);
        return arr1;
    }
    else if (direction = 'dec') {
        let arr2 = arrNum.sort((a, b) => b - a);
        return arr2;
    }
}

console.log(sortNums(nums, 'asc'));


// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

let duration = coursesAndDurationArray.sort((a, b) => {
    return b.monthDuration - a.monthDuration;
});
console.log(duration);


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filter = coursesAndDurationArray.filter(value => {
    return value.monthDuration > 5;
})
console.log(filter);


// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
let word = 'наслаждение';

// let cutString = (str, n) => {
//     let arr = [];
//     let substring = '';
//
//     for (let i = 0; i < str.length; i++) {
//        if (substring.length < n) {
//            substring += str[i];
//        } else {
//            arr.push(substring);
//            substring = '';
//            substring += str[i];
//        }
//     }
//     console.log(arr);
//     return arr;
// }
//
// console.log(cutString(word, 3));



let cutString = (str, n) => {
    const numOfSubstrings = Math.ceil(str.length / n);
    let arr = [];
    let s = 0;
    for (let i = 0; i < numOfSubstrings; i++) {
    arr.push(str.substr(s, n));
    s+= n;
    }
    return arr;
}

console.log(cutString(word, 3));



