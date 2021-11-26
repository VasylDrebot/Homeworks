
// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

let word = 'наслаждение';

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


// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
// наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру
// (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
let email = 'someemail@gmail.com';
let email2 = 'someeMAIL55gmail.com';
let email3 = 'someeMAIL@i.ua';
let email4 = 'some.email@gmail.com';
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над
// протоколом, з регулярками будете потім бавитись.

let validateEmails = (str) => {
    let res = str.split('@');
    if (str.includes('@') && res[1].includes('.', 2) && str.toLowerCase() && res[0].includes('.') !== true) {
        return 'email-adress is validate';
    } else {
        return 'email-adress is not validate'
    }
}
console.log(validateEmails(email));


// - є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

let result = coursesArray.sort((a, b) => {
    return b.modules.length - a.modules.length;
});
console.log(result);



// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
let str = "Астрономия это наука о небесных объектах";
let symb = "о";

let count = (str, stringsearch) => {
    let array = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i].includes(stringsearch)) {
            array.push(stringsearch);
        }
    }
    return array.length;
}

console.log(count(str, symb));



// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
let strTwo = "Сила тяжести приложена к центру масс тела";
let cutString2 = (str, n) => {
    let string1 = str.substr(0, n);
    return string1;
}

console.log(cutString2(strTwo,31));



