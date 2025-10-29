let questions = [
    { q: "Сколько будет 2 + 2?", a: "4" },
    { q: "Столица Франции?", a: "Париж" },
    { q: "Какой цвет получится при смешении синего и жёлтого?", a: "Зелёный" }
];

let randomIndex = Math.floor(Math.random() * (questions.length));
let randomQA = questions[randomIndex];
console.log("Question:" + randomQA.q);
console.log("Answer:" + randomQA.a);





/* //Викторина со случайным вопросом
let questions = [
    { q: "Сколько будет 2 + 2?", a: "4" },
    { q: "Столица Франции?", a: "Париж" },
    { q: "Какой цвет получится при смешении синего и жёлтого?", a: "Зелёный" }
]; 

function getRandomQuestion() {
const index = Math.floor(Math.random() * question.length);
return questions[index];
}
const randomQA = getRandomQuestion();
console.log("Question:" + randomQA.q);
console.log("Answer:" + randomQA.a);
*/