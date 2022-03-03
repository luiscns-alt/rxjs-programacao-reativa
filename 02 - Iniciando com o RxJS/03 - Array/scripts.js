var numbers = [1, 8, 15, 37];
var source = Rx.Observable.range(numbers);

var subscription = source.subscribe(
  (value) => console.log(`My Value is: ${value}`),
  (value) => {
    // This is intentional
  },
  (value) => console.log(`Complete`)
);
