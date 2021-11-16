// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while

let numbers = [2,17,13,6,22,31,45,66,100,-18];
let i = 0;
while (i < numbers.length) {
    console.log(numbers[i])
    i++;
}

// 2. перебрати його циклом for

for (i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

let y = 0;
while (y < numbers.length) {
    if (numbers[y] % 2 === 1) {
        console.log(numbers[y])
    }
    y++;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (y = 0; y < numbers.length; y++) {
    if (numbers[y] % 2 === 1) {
        console.log(numbers[y])
    }
}


// 5. перебрати циклом while та вивести  числа тільки парні  значення

let p = 0;
while (p < numbers.length) {
    if (numbers[p] % 2 === 0) {
        console.log(numbers[p])
    }
    p++;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (p = 0; p < numbers.length; p++) {
    if (numbers[p] % 2 === 0) {
        console.log(numbers[p])
    }
}


// 7. замінити кожне число кратне 3 на слово "okten"

for (let u = 0; u < numbers.length; u++) {
    if (numbers[u] % 3 === 0) {
        numbers[u] = 'okten'
    }

}
console.log(numbers)


// 8. вивести масив в зворотньому порядку.

for (let c = numbers.length-1; c >= 0; c--) {
    console.log(numbers[c])
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 1. перебрати його циклом while в зворотньому напрямку
let n = numbers.length-1;
while (n>=0) {
    console.log(numbers[n])
    n--;
}

// 2. перебрати його циклом for в зворотньому напрямку
for (let d = numbers.length-1; d >= 0; d--) {
    console.log(numbers[d])
}

// 3. перебрати циклом while в зворотньому напрямку та вивести  числа тільки з непарним індексом

let f = numbers.length-1;
while (f>=0) {
    if (numbers[f] % 2 === 1) {
        console.log(numbers[f])
    }
    f--;
}

// 4. перебрати циклом for в зворотньому напрямку та вивести  числа тільки з непарним індексом

for (let d = numbers.length-1; d >= 0; d--) {
    if (numbers[d] % 2 === 1) {
        console.log(numbers[d])
    }
}

// 5. перебрати циклом while в зворотньому напрямку та вивести  числа тільки парні  значення

let a = numbers.length-1;
while (a>=0) {
    if (numbers[a] % 2 === 0) {
        console.log(numbers[a])
    }
    a--;
}

// 6. перебрати циклом for в зворотньому напрямку та вивести  числа тільки парні  значення
for (let d = numbers.length-1; d >= 0; d--) {
    if (numbers[d] % 2 === 0) {
        console.log(numbers[d])
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"
for (let z = numbers.length-1; z >= 0; z--) {
    if (numbers[z] % 3 === 0) {
        numbers[z] = 'okten'
    }
}

console.log(numbers)

