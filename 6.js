let numArr = [];
function getSum(a, b, c) {      // parameters of function write in ()!!!
    let sum = 0;
    if (c == 0) {           // 
        console.log("You can´t divide to 0")
        return
    }
    sum = (a + b) / c;
    console.log(sum);
    numArr.push(sum);
    console.log(`Sum is: ${numArr}`)
    if (numArr.length < 2) {
        console.log("Length too small!")
    }
}
getSum(16, 8, 2);





/* Написать код на js
1.Есть функция Которая принимает
3 параметра . Надо в функции сложить первое число и второе, поделить результат на 3 число и результат положить в массив. В массиве сделать проверку если массив не пустой то распечатать его сумму в цикле . И сделать проверку что на 0 нельзя делить.
2. Generate pin code*/

//node index.js