
let names = [];
function addContact(name, surname, age) {
    let obj = {
        name: name,  // key:value
        surname: surname,
        age: age
    }
    names.push(obj);
    console.log(`Contact with name: ${name} ${surname} added to database`); // interpolation
}
addContact("Vita", "Keranen", 46);
addContact("Laura", "Viitanen", 28);

function showContacts() {
    if (names.length == 0) {  // or = ||
        console.log("Unfortunately database is empty!");
    }
    else {
        for (let i = 0; i < names.length; i++) {
            //console.log(names[i].name + "" + names[i].surname + " " + names[i].age + "");
            console.log(`Name: ${names[i].name}, Lastname: ${names[i].surname}, age: ${names[i].age}`);
        }
    }

}
console.log(names);
showContacts();
