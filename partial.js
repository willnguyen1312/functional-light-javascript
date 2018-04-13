function partial(fn, ...presetArgs) {
  return function partiallyApplied(...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}

function say(greeting, name) {
  return `${greeting} ${name}`;
}

const sayHi = partial(say, "Hi");

console.log(sayHi("Nam"));
