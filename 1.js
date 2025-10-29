let car = {
    model: "WW",
    year: "2020",
    color: "white",
}
console.log(car);

/*for (i = 0; i > car.length; i++) {
    console.log(car[i]);
}*/
let keys = Object.keys(car);
for (let i = 0; i < keys.length; i++) {
    console.log(keys[i]);
    console.log(car[keys[i]]);
}

for (let i in car) {
    console.log(i + " " + car[i]);   // delayet probel
}
console.log(car.color);

let cars = [
    {
        model: "WW",
        year: "2020",
        color: "white",
    },
    {
        model: "bmw",
        year: "2021",
        color: "black",
    },
    {
        model: "WW",
        year: "2020",
        color: "white",
    }
]
console.log(cars);

for (let i = 0; i < cars.length; i++) {     // i you can get inside of loop!!!
    console.log(cars[i]);
    console.log(cars[i].year);
}
//Вывести в консоль год 2020 для третьего автомобиля
console.log(cars[2].year);


