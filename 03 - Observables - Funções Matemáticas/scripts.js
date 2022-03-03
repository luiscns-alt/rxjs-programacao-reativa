/**
 * COUNT
 */
var source = Rx.Observable.range(0, 10).count();
var subscription = source.subscribe((value) => console.log(value));

/**
 * MAX
 */
var sourceMAX = Rx.Observable.from([1, 3, 5, 7, 9, 2, 4, 6, 8]).max();

var subscriptionMAX = source.subscribe((value) => console.log(value));

/**
 * MIN
 */

var sourceMIN = Rx.Observable.from([1, 3, 5, 7, 9, 2, 4, 6, 8]).min();

var subscriptionMIN = source.subscribe((value) => console.log(value));

/**
 * REDUCER
 */
var sourceReducer = Rx.Observable.from([1, 2, 3, 4, 5]).reduce(
  (total, current) => total + current
);

var subscriptionReducer = source.subscribe((value) => console.log(value));
