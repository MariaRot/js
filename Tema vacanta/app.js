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

function myIndexOf(obj) {    
    for (var i = 0; i < personArray.length; i++) {
        if (personArray[i].name == obj.name && personArray[i].surname == obj.surname) {
            return i;
        }
    }
    return -1;
}

function render (person) {
    var nameSurname = document.createElement('li');
    nameSurname.innerText = `${person.name} ${person.surname}`;

    var removeButton = document.createElement('button');
    removeButton.innerText = '-';
    removeButton.addEventListener("click", () => {
        index = myIndexOf(person);
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
    index = myIndexOf(person);
    if(index === -1) {
        personArray.push(person);
        render(person);
    }
    else {
        alert("Lista contine deja un participant cu acest nume!");
    } 
});

personForm.addEventListener('submit', (evt) => {
    if(personArray.length != 0) {
        var rand = personArray[Math.floor(Math.random() * personArray.length)];
        winner.innerHTML = `${rand.name} ${rand.surname} are norocul scris in stele! Felicitari!`;
    }
    else {
        winner.innerHTML = "Pentru a determina un castigator trebuie sa introduci cel putin un nume in lista!";
    }
    evt.preventDefault();
});
