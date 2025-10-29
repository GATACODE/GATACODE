let cities = ["Helsinki", "Copenhagen", "Stockholm", "Tallinn", "Torrevieja", "Leeds"];
for (let x = 0; x < cities.length; x++) {
    console.log(cities[x]);
}
for (let i = 0; i <= cities.length; i += 2) {
    console.log(cities[i]);
}

let arr = [18, 4, 10, 7, 2];
let sum = 0;
for (let y = 0; y < arr.length; y++) {
    sum += arr[y];
}
let average = sum / arr.length;

console.log(sum);
console.log(average);

let stroke = "5";
console.log(typeof stroke);
let number = parseInt(stroke); // changed
console.log(typeof number);

function printArrLength(arr) {  // function read length of array

    console.log("Length is:" + arr.length); //concatenation

}
printArrLength([1, 2, 3, 4, 5, 6]);

let arrNum = [];
function addNumber(num) {
    arrNum.push(num); // adding to array
    console.log(arrNum);
}
addNumber(3);
addNumber(6);

console.log("Hello, Elena!"); // regular output

let x = 46;
console.log(x); // output of number

let name = "Elena";
console.log("Name:", name); // output with explanation

let y = 3.14;
console.log(typeof y); // value type checking

let arr1 = [1, 3, 5, 7];
console.log(arr1);  // output of array

let user = { name: "Elena", age: 46 };
console.log(user);  // output of object

let products = [
    { name: "Samsung", price: 500 },
    { name: "iPhone", price: 900 }
];
console.log(products);  // output of objects/array in tab


//node index.js