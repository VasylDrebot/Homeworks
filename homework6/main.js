// - Знайти та вивести довижину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str = 'hello world';
console.log(str.length);

let str2 = 'lorem ipsum';
console.log(str2.length);

let str3 = 'javascript is cool';
console.log(str3.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let strOne = 'hello world';
console.log(str.toUpperCase());

let strTwo = 'lorem ipsum';
console.log(str2.toUpperCase());

let strThree = 'javascript is cool';
console.log(str3.toUpperCase());




// - Перевести до нижнього регістру наступні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'


console.log(strOne.toLowerCase());

console.log(strTwo.toLowerCase());

console.log(strThree.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str1 = ' dirty string   ';
console.log(str1.trim());


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

let strWords = 'Каждый охотник желает знать';

let stringToarray = (strArr) => {
    let res = strArr.split(' ');
    return res;
}
let arr = stringToarray(strWords);
console.log(arr);



// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

let delete_characters = (sTr, length) => {
    let res1 = sTr.substr(0, length);
    return res1;
}

console.log(delete_characters(strWords, 6));



// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let strWords2 = "HTML JavaScript PHP";

let insert_dash = (stR) => {
    let res2 = stR.replaceAll(' ', '-').toUpperCase();
    return res2;
}

console.log(insert_dash(strWords2));



// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.


let strTxt = 'okten';

let firstCharToUpperCase = (sTr1)  => {
    let res3 = sTr1.substr(0, 1).toUpperCase() + sTr1.substr(1).toLowerCase();
    return res3;

}

console.log(firstCharToUpperCase(strTxt));


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let words = 'learn java script';

let capitalize = (stR1) => {
    let result = stR1.split(' ');
    let result2 = result.map(value => value.substr(0, 1).toUpperCase() + value.substr(1).toLowerCase());
    let result3 = result2.join(' ');
    return result3;
}

console.log(capitalize(words));






