function dropWhile(array, predicate) {
  let dropIndex = array.findIndex((element, index) => !predicate(element, index, array));
  return dropIndex === -1 ? [] : array.slice(dropIndex);
}

const numeros = [40, 33, 50, 8, 2, 3, 20];
const multiploDe10 = x => x % 10 === 0;

console.log(dropWhile(numeros, multiploDe10)); 
