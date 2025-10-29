let arr = [1, 2, 3, 4, 6, 8, 12, 34];
let newArr = [];
let count = 0;
let sum = 0;
let sum2 = 0;
let sum3 = 0;
let countOdd = 0;
let countEven = 0;
for (let a = 0; a < arr.length; a++) {
    if (arr[a] > 5) {
        count++;
        newArr.push(arr[a]);
        sum += arr[a];
    }
    if (arr[a] % 2 !== 0) {
        countOdd++;
    }
    if (arr[a] % 2 === 0) {
        //countEven++; how many even numbers in arr
        sum2 += arr[a]
    }
}
for (let b = 0; b < arr.length - 2; b++) {
    sum3 += arr[b];
}
console.log(count);
console.log(newArr);
console.log(sum);
console.log(countOdd);
console.log(countEven);
console.log(sum2);
console.log(sum3);
