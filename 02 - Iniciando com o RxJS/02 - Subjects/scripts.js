var observable = Rx.Observable.create((observer) => {
  var i = 0;
  var interval = setInterval(() => {
    i++;
    observer.next(parseInt(Math.random() * 10));
    if (i > 5) {
      clearInterval(interval);
      observer.complete();
    }
  }, 1000);
});

var subject = new Rx.Subject();

var subSource = observable.subscribe(subject);

var subscription = subject.subscribe(
  (value) => console.log(`1 - My Value is ${value}`),
  (err) => console.log(`Error message: ${err}`),
  () => console.log("1 - Completed!")
);

var subscription2 = subject.subscribe(
  (value) => console.log(`2 - My Value is ${value}`),
  (err) => console.log(`Error message: ${err}`),
  () => console.log("2 - Completed!")
);
