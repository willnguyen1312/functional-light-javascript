function compose(...funcs) {
  return funcs.reduce((acc, cur) => arg => acc(cur(arg)));
}

const double = x => 2 * x;
const log = x => console.log(x);

compose(log, double)(3);
