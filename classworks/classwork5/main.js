// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let getMinNumber = (a, b, c) => {
    if (a < b && a < c) {
        return a;
    } else if (b < a && b < c) {
        return b;
    } else if (c < a && c < b) {
        return c;
    }
}

console.log(getMinNumber(5, 6, 9));



// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let getMaxNumber = (a, b, c) => {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else if (c > a && c > b) {
        return c;
    }
}

console.log(getMaxNumber(12, 19, 30));


// - створити функцію яка повертає найбільше число з масиву

let getMaxNumber1 = (arr) => {
    let maxNumber = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNumber) {
            maxNumber = arr[i];
        }
    }
    return maxNumber;
}

console.log(getMaxNumber1([2, 8, 3, 9, 18]));






// - створити функцію яка повертає найменьше число з масиву

let getMinNumber2 = (arr1) => {
    let minNumber = arr1[0];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] < minNumber) {
            minNumber = arr1[i];
        }
    }
    return minNumber;
}

console.log(getMinNumber2([3, 8, 10, 2, 1, 5]));






// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let getSum = (arrNum) => {
    let sum = 0;
    for (let i = 0; i < arrNum.length; i++) {
        sum += arrNum[i];
    }
    return sum;
}

console.log(getSum([5, 8, 9, 10, 6]));




// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let getSum2 = (arrNum2) => {
    let sum1 = 0;
    for (let i = 0; i < arrNum2.length; i++) {
        sum1 += arrNum2[i];
    }
    return sum1 / arrNum2.length;
}

console.log(getSum2([10, 20, 30, 40, 50]));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

let showMaxNumber = (arrNum) => {
    let minNum = arrNum[0];
    let maxNum = arrNum[0];
    for (let i = 0; i < arrNum.length; i++) {
        if (arrNum[i] < minNum) {
            minNum = arrNum[i];
        } else if (arrNum[i] > maxNum) {
            maxNum = arrNum[i];
        }
    }
    console.log(maxNum);
    return minNum;
}

showMaxNumber([5, 8, 9, 20, 30, 6, 2, 50]);


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

let fillArr = (length, arrEl) => {
    for (let i = 0; i < length; i++) {
        arrEl.push(Math.round(Math.random() * 100));
    }
    return arrEl;
}

console.log(fillArr(20, []));



// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
// який характеризує кінцеве значення діапазону.

let fillArr2 = (length, arrEl2, limit) => {
    for (let i = 0; i < length; i++) {
        arrEl2.push(Math.round(Math.random() * limit));
    }
    return arrEl2;
}

console.log(fillArr2(30, [], 500));



// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].


let reverse = (array3, arr3) => {
    for (let i = array3.length-1; i >= 0; i--) {
        arr3.push(array3[i]);
    }
    return arr3;
}

console.log(reverse([1, 2, 3], []));