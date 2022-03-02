#### Programação Funcional

##### A Programação Funcional foca-se na chamada de funções ao invés de comandos a cada linha. Isso muitas vezes deixa o código até mais legível.

##### Uma ideia básica das funções em Programação Funcional é que todas as funções devem ser “puras”. Isso significa que toda função deve receber pelo menos um parâmetro e sempre retornar um valor.

---

```js
var list = [1, 2, 3, 4, 5, 6];
var pares = [];
for (var i = 0; i < list.length; i++) {
  if (list[i] % 2 === 0) {
    pares.push(list[i]);
  }
}
```

- Programação Funcional

```js
var list = [1, 2, 3, 4, 5, 6];
var pares = list.filter((x) => x % 2 === 0);
```
