/**
 * Cold
 */
var source = Rx.Observable.interval(1000);

var subscription = source.subscribe((value) =>
  console.log(`My Value is ${value}`)
);

/**
 * Hot
 */
var sourceO = Rx.Observable.interval(1000);
var hot = source.publish();

var subscriptionO = hot.subscribe((value) =>
  console.log(`My Value is ${value}`)
);
