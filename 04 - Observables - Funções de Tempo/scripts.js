/**
 * Delay
 */
var sourceDelay = Rx.Observable.from([1, 2, 3, 4, 5]).delay(5000);

var subscriptionDelay = source.subscribe((value) => console.log(value));

/**
 * Interval
 */

var sourceInterval = Rx.Observable.interval(1000);

var subscriptionInterval = source.subscribe((value) => console.log(value));

/**
 * Timer
 */

var sourceTimer = Rx.Observable.timer(5000, 1000).take(5);

var subscriptionTimer = source.subscribe((value) => console.log(value));

/**
 * debounce
 */

var myInput = document.querySelector("#myInput"),
  myDiv = document.querySelector("#myDiv"),
  inputs = Rx.Observable.fromEvent(myInput, "keyup");

inputs.subscribe((event) => {
  myDiv.innerHTML = event.target.value;
});

var timer = null;
inputs.subscribe((event) => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    myDiv.innerHTML = event.target.value;
  }, 1000);
});

inputs
  .debounce(() => Rx.Observable.interval(1000))
  .subscribe((event) => {
    myDiv.innerHTML = event.target.value;
  });
