let person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: ['html', 'javascript', 'css'],
  friends: [{
    name: 'Larry',
    surname: 'Larryson',
    age: 30
  }, {
    name: 'Steven',
    surname: 'Stevenson',
    age: 31
  }, {
    name: 'Carol',
    surname: 'Carolson',
    age: 29
  }]
};


let [skill1,,skill3] = person.skills;
let p = document.createElement('p');
p.innerHTML = `Cunosc ${skill1} si ${skill3}.`;
document.body.appendChild(p);

let [,steven] = person.friends;
let {name: friend2Name, 
  surname: friend2Surname,
  age: friend2Age
} = steven;

let p2 = document.createElement('p');
p2.innerText = `Ma numesc ${friend2Name} si am ${friend2Age}`;
document.body.appendChild(p2);

let {petOwner: hasPet} = person;
