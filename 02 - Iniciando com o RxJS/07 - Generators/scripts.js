function* myGenerator() {
  yield* [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}

Rx.Observable.from(myGenerator())
  .take(5)
  .subscribe((x) => console.log(x));
