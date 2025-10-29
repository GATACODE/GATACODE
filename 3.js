function printArrNumbers(arr) {

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
printArrNumbers([1, 2, 3, 4, 5]);

function printArrLength(arr) {

    console.log("Length is:" + arr.length); //concatenation

}
printArrLength([1, 2, 3, 4, 5, 6]);


function printArr(arr) {
    if (arr[1] > 5) {
        console.log("YESS!");
    }
    else {
        console.log("NOOO!");
    }
}
printArr([1, 10, 20, 3]);

function printArray(arr) {
    if (arr[0] > 5 && arr[1] > 5) {  // or = ||
        console.log("YESS!");
    }
    else {
        console.log("NOOO!");
    }

}
printArray([1, 4, 6, 8]);




//node index.js