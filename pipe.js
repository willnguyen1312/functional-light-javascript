function pipe(...funcs) {
  return funcs.reduce((acc, cur) => arg => cur(acc(arg)));
}

const square = x => x ** 2;
const log = x => console.log(x);

pipe(square, log)(3);
