/**
 * AsyncSubject
 */
var subjectAsyncSubject = new Rx.AsyncSubject();
var subscriptionAsyncSubject = subjectAsyncSubject.subscribe(
  (value) => console.log(`My Value is ${value}`),
  (err) => console.log(`Error message: ${err}`),
  () => console.log("Completed!")
);

var counter = 5,
  intervalAsyncSubject = setInterval(() => {
    subjectAsyncSubject.next(counter--);
    if (!counter) {
      clearInterval(intervalAsyncSubject);
      subjectAsyncSubject.complete();
    }
  }, 1000);

/**
 * BehaviorSubject
 */
var subjectBehaviorSubject = new Rx.BehaviorSubject(83);
var subscriptionBehaviorSubject = subjectBehaviorSubject.subscribe(
  (value) => console.log(`My Value is ${value}`),
  (err) => console.log(`Error message: ${err}`),
  () => console.log("Completed!")
);

var counterBehaviorSubject = 5,
  intervalBehaviorSubject = setInterval(() => {
    subjectBehaviorSubject.next(counterBehaviorSubject--);
    if (!counterBehaviorSubject) {
      clearInterval(intervalBehaviorSubject);
      subjectBehaviorSubject.complete();
    }
  }, 1000);

/**
 * ReplaySubject
 */
var subjectReplaySubject = new Rx.ReplaySubject(2);
var subscriptionReplaySubject = subjectReplaySubject.subscribe(
  (value) => console.log(`My Value is ${value}`),
  (err) => console.log(`Error message: ${err}`),
  () => console.log("Completed!")
);

var counterReplaySubject = 5,
  intervalReplaySubject = setInterval(() => {
    subjectReplaySubject.next(counterReplaySubject--);
    if (!counterReplaySubject) {
      clearInterval(intervalReplaySubject);
      subjectReplaySubject.complete();
    }
  }, 1000);

var subjectReplaySubject2 = new Rx.ReplaySubject(2, 10000);
var subscriptionReplaySubject2 = subjectReplaySubject2.subscribe(
  (value) => console.log(`My Value is ${value}`),
  (err) => console.log(`Error message: ${err}`),
  () => console.log("Completed!")
);

var counterReplaySubject2 = 5,
  intervalReplaySubject2 = setInterval(() => {
    subjectReplaySubject2.next(counterReplaySubject2--);
    if (!counterReplaySubject2) {
      clearInterval(intervalReplaySubject2);
      subjectReplaySubject2.complete();
    }
  }, 1000);
