let personForm = document.getElementById('personForm');
let addPersonButton = document.getElementById('addPerson');
let personArray = new Array();
let person;
let list =  document.getElementById('list');
let winner = document.getElementById('winner');
let index;

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}

function render (person) {
    var nameSurname = document.createElement('li');
    nameSurname.innerText = `${person.name} ${person.surname}`;

    var removeButton = document.createElement('button');
    removeButton.innerText = '-';
    removeButton.addEventListener("click", () => {
        index = personArray.indexOf(person);
        personArray.splice(index, 1);
        list.removeChild(nameSurname);
    });

    nameSurname.appendChild(removeButton);
    list.appendChild(nameSurname);
}

addPersonButton.addEventListener('click', () => {
    let addName = document.getElementById('name');
    let addSurname = document.getElementById('surname');
    
    person = new Person(addName.value, addSurname.value);
    index = personArray.indexOf(person);
    personArray.push(person);
    render(person);

    
});

personForm.addEventListener('submit', (evt) => {
    var rand = personArray[Math.floor(Math.random() * personArray.length)];
    winner.innerHTML = `${rand.name} ${rand.surname} are norocul scris in stele! Felicitari!`;
    evt.preventDefault();
});
