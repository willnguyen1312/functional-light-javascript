// producer:

var a = {
  onValue(v) {
    b.onValue(v);
  }
};

setInterval(function everySecond() {
  a.onValue(Math.random());
}, 1000);

// **************************
// consumer:

var b = {
  map(v) {
    return v * 2;
  },
  onValue(v) {
    v = this.map(v);
    console.log(v);
  }
};
