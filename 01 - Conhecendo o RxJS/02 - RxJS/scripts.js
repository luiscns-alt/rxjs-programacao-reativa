var a = new Promise(function (resolve, reject) {
  resolve();
})
  .then(function (b) {
    return b;
  })
  .then(function (c) {
    return c;
  })
  .then(function (d) {
    return d;
  })
  .then(function (e) {
    return e;
  })
  .then(function (f) {
    return f;
  });
