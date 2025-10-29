function getAverageAge() {
    let names = [
        {
            name: "Elena",
            age: 46,
        },
        {
            name: "Sonja",
            age: 25,
        },
        {
            name: "Laura",
            age: 22,
        }
    ];
    let sum = 0;
    let avr = 0;
    let totalNamesLength = 0;
    for (let i = 0; i < names.length; i++) {
        console.log(names[i].age);
        sum = sum + names[i].age; // sum += names[i].age
        totalNamesLength += names[i].name.length;
    }
    avr = sum / names.length;
    console.log(avr);
    console.log("Length is:" + totalNamesLength)
}
getAverageAge();

function getSum() {
    let sum = 0;
    let arr = [1, 34, 45, 67];
    for (let x = 0; x < arr.length; x++) {
        sum += arr[x]; // SUM = SUM + ARR[X]

    }
    console.log(sum);

}
getSum();

function getSumWhile() {
    let sum = 0;
    let i = 0;
    let arr = [2, 4, 6, 8];
    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    console.log(sum);
}
getSumWhile();

function getTotalSum() {
    let i = 0;
    let sum = 0;
    let obj = [
        {
            age: 22,
            weight: 33,
        },
        {
            age: 44,
            weight: 35,
        },
        {
            age: 46,
            weight: 55
        }
    ];
    while (i < obj.length) {
        sum += obj[i].age;
        sum += obj[i].weight;
        i++;
    }
    console.log(sum);

}
getTotalSum();

function getArr(arr) {
    if (arr[1] > 2) {  // or = ||
        console.log("ok!");
    }
}
getArr([16, 8, 5, 80]);

function getArrSum(arr) {
    let sum = 0;
    for (let x = 0; x < arr.length; x++) {
        sum += arr[x];
    }
    if (sum < 20) {  // or = ||
        console.log("okay!");
    }
    else {
        console.log("NOOO!");
    }
}
getArrSum([16, 8, 5, 80]);