var observable = Rx.Observable.create((observer) => {
  var i = 0;
  setInterval(() => {
    observer.next(i++);
    if (i > 3) {
      observer.complete();
    }
  }, 1000);
});

observable.subscribe(
  (value) => console.log(`My value is ${value}`),
  (err) => console.error("error"),
  () => console.log("Completed")
);
