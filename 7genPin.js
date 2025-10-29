function generatePin() {
    let pin = "";
    for (let i = 0; i < 4; i++) {
        pin += Math.floor(Math.random() * 10); // pin += used to make them together
    }
    return pin;
}
let result = generatePin();
console.log(result);
