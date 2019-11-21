var friends = [{
  name: 'Dragos',
  surname: 'Iordache',
  friends: {}
}, {
  name: 'Larry',
  surname: 'Larryson',
  friends: {}
}, {
  name: 'Steven',
  surname: 'Stevenson',
  friends: {}
}, {
  name: 'Carol',
  surname: 'Carolson',
  friends: {}
}, {
  name: 'Andra',
  surname: 'Andrason',
  friends: {}
}];


console.warn('Folosind o bucla for afiseaza proprietatea surname a tuturor obiectelor din arrayul friends.');
for(let i = 0; i < friends.length; i++) {
  console.log(friends[i].surname);
}

console.warn('Afiseaza numele complet al tuturor prietenilor, insa o data ce l-ai gasit pe steven, opreste bucla cu ajutorul keywordului break.');
for(let i = 0; i < friends.length; i++) {
  console.log(`${friends[i].name} ${friends[i].surname}`);
  if (friends[i].name === 'Steven') {
    break;
  }
}

console.warn('Folosind keywordul continue, afiseaza numele complet al prietenilor, doar daca numarul de caractere total al numelor lor este mai mare de 13.');
for(let i = 0; i < friends.length; i++) {
  if (friends[i].name.length + friends[i].surname.length <= 13) {
    continue;
  }
  console.log(`${friends[i].name} ${friends[i].surname}`);
}

console.warn('Folosind o bucla for afiseaza proprietatea name a tuturor obiectelor din arrayul friends.');
for(let i = 0; i < friends.length; i++) {
  console.log(friends[i].name);
}

console.warn('Afiseaza numele complet al tuturor prietenilor.');
for(let i = 0; i < friends.length; i++) {
  console.log(`${friends[i].name} ${friends[i].surname}`);
}

console.warn('Folosind keywordul break, afiseaza numele complet al prietenilor dar opeste bucla la primul surname care are numarul de caractere mai mare sau egal decat 9.');
for(let i = 0; i < friends.length; i++) {
  console.log(`${friends[i].name} ${friends[i].surname}`);
  if(friends[i].surname.length >= 9) {
    break;
  }
}
