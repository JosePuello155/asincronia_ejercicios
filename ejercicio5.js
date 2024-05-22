const numeros = [10, 2, 3, 40, 33, 50];
const multiploDe10 = x => x % 10 === 0;
const esPositivo = x => x >= 0;

console.log(numeros.every(esPositivo));
