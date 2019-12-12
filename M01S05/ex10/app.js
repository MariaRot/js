function calculateSurface (L, l) {
  if (arguments.length === 2) {
    return L * l;
  } else {
    return Math.pow(L, 2);
  }
};

console.log(`Suprafata unui patrat de 2 pe 2 este ${calculateSurface(2)}`);
console.log(`Suprafata unui dreptunghi de 6 pe 7 este ${calculateSurface(6, 7)}`);

