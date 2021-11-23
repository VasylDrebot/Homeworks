// - Дано натуральное число n. Выведите все числа от 1 до n.

let getNumbers = (n, arr) => {
   for (let i = 1; i <= n; i++)
       arr.push(i);
   for (let p = 0; p < arr.length; p++) {
          console.log(arr[p]);
      }
}

getNumbers(5, []);


let getNumbers2 = (a, b) => {
    if (a < b) {
        for (let i = a; i <= b; i++) {
            console.log(i)
        }
    } else if (b < a) {
        for (let i = a; i >= b; i--) {
            console.log(i);
        }
    }
}
getNumbers2(9, 3);



// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]



function moveEl (arr, i) {
    let element = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = element;
    return arr;
}
console.log(moveEl([9, 8, 0, 4], 2));



//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]



let moveArrEl = (arr, el) => {
    let res = [];
    let movedElements = [];

    for (let i = 0; i < arr.length; i++) {
        const arrEl = arr[i];
        if (arrEl === el) {
            movedElements.push(el);
        } else {
            res.push(arrEl);
        }
    }

    return res.concat(movedElements);

}

console.log(moveArrEl([1,0,6,0,3], 0));

