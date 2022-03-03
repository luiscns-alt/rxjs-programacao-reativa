var myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(500);
  }, 2000);
});

var source = Rx.Observable.fromPromise(myPromise);
var subscription = source.subscribe((value) =>
  console.log(`My Value is ${value}`)
);
