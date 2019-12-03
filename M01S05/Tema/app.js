function calculateSurface (L, l, h) {
  switch (arguments.length) {
    case 2:
      return L * l;
    case 1:
      return Math.pow(L, 2);
    case 3:
      return L * l * h;
    break;
  }
};

console.log(`Suprafata unui patrat de 2 pe 2 este ${calculateSurface(2)}`);
console.log(`Suprafata unui dreptunghi de 6 pe 7 este ${calculateSurface(6, 7)}`);
console.log(`Suprafata unui paralelipiped de 6 pe 7 pe 10 este ${calculateSurface(6, 7, 10)}`);

function calculateCircleArea(r) {
  return Math.pow(r, 2) * Math.PI;
}

console.log(calculateCircleArea(2.2));
console.log(calculateCircleArea(15));

var pet = {
  getName: function() {
    return 'Azorel';
  },
  getSpecies: function() {
    return 'bichon';
  },
  getAge: function() {
    return 2;
  }
};

console.log(`${pet.getName()} este ${pet.getSpecies()} si are ${pet.getAge()} ani.`);
var petAge = pet.getAge();
console.log(`Animalul meu are ${petAge} ani.`);