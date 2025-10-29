let sum = 0;

for (let x = 0; x <= 10; x++) {

    sum += x;

}
console.log(sum);

let arr = [22, 33, 44, 55];
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

for (let x of arr) {
    sum += x;
}
console.log(sum);


//node index.js