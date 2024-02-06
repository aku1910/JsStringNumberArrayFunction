// tapsiriq 1

// function reqem(a , b) {
//     if (a < b) {
//         console.log(a + b)
//     } else {
//         console.log("false");
//     }
// }
// reqem(9, 7)


// task2 filter

// function baseFilter(arr, basic) {
//     const newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (basic(arr[i], i, arr)) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// const reqemler = [1,2,3,4,5,6,7,8,9,10];
// const cutreqem = baseFilter(reqemler, (num) => num % 2 === 0);
// console.log(cutreqem);



// task3 map

// function customMap(arr, arr1) {
//     const mappedArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         mappedArray.push(arr1(arr[i], i, arr));
//     }
//     return mappedArray;
// }

// const reqemler = [10, 44, 36, 58, 24];
// const bolme = customMap(reqemler, (num) => num / 2);
// console.log(bolme);


// task3 reduce

// function Reduce(arr, callback, mainvalue) {
//     let container = mainvalue;
//     let a;

//     if (mainvalue === undefined) {
//         a = 1
//     } else {
//         a = 0
//     }
//     for (let i = a; i < arr.length; i++) {
//         container = callback(container, arr[i], i, arr);
//     }

//     return container;

// }

// const numbers = [1, 2, 3, 4, 5];
// const sum = Reduce(numbers, (contain, first) => contain + first, 0);
// console.log(sum);

