var list = [1, 2, 3, 4, 5, 6];
var pares = [];

for (var i = 0; i < list.length; i++) {
  if (list[i] % 2 === 0) {
    pares.push(list[i]);
  }
}

console.log(pares);

/**
 * Programação Funcional
 */
var impar = list.filter((x) => x % 2 !== 0);

console.log(impar);
