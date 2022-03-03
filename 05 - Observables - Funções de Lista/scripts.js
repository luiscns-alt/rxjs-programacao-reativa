/**
 * Maps
 */
var items = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }];

var sourceMaps = Rx.Observable.from(items);
var subscriptionMaps = sourceMaps
  .map((x) => {
    return { value: x.a };
  })
  .subscribe((x) => console.log(x));

/**
 * Filter
 */
var sourceFilter = Rx.Observable.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
var subscriptionFilter = sourceFilter
  .filter((x) => x % 2 === 0)
  .subscribe((x) => console.log(x));

/**
 * Take
 */
var sourceTake = Rx.Observable.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
var subscriptionTake = sourceTake.take(3).subscribe((x) => console.log(x));

/**
 * Find
 */
var people = [
  { name: "Rick", age: 10 },
  { name: "Rose", age: 25 },
  { name: "Cassandra", age: 13 },
  { name: "Henry", age: 22 },
];

var sourceFind = Rx.Observable.from(people);
var subscriptionFind = sourceFind
  .find((x) => x.age > 18)
  .subscribe((x) => console.log(x));

/**
 * First
 */
var peopleFirst = [
  { name: "Rick", age: 10 },
  { name: "Rose", age: 25 },
  { name: "Cassandra", age: 13 },
  { name: "Henry", age: 22 },
];

var sourceFirst = Rx.Observable.from(people);
var subscriptionFirst = sourceFirst
  .first((x) => x.name[0] === "R")
  .subscribe((x) => console.log(x));

/**
 * Last
 */

var peopleLast = [
  { name: "Rick", age: 10 },
  { name: "Rose", age: 25 },
  { name: "Cassandra", age: 13 },
  { name: "Henry", age: 22 },
];

var sourceLast = Rx.Observable.from(people);
var subscriptionLast = sourceLast
  .last((x) => x.name[0] === "R")
  .subscribe((x) => console.log(x));

/**
 * Pluck
 */
var peoplePluck = [
  { name: "Rick", age: 10 },
  { name: "Rose", age: 25 },
  { name: "Cassandra", age: 13 },
  { name: "Henry", age: 22 },
];

var sourcePluck = Rx.Observable.from(peoplePluck);
var subscriptionPluck = sourcePluck
  .pluck("name")
  .subscribe((x) => console.log(x));
