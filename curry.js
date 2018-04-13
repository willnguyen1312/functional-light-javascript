function curry(fn, arity = fn.length) {
  return (function nextCurried(prevArgs) {
    return function curried(...nextArg) {
      var args = [...prevArgs, ...nextArg];

      if (args.length >= arity) {
        return fn(...args);
      } else {
        return nextCurried(args);
      }
    };
  })([]);
}

function uncurry(fn) {
  return function unworried(...args) {
    var ret = fn;

    for (let arg of args) {
      ret = ret(arg);
    }

    return ret;
  };
}

const add = (a, b, c, d) => a + b + c + d;

const curryAdd = curry(add);

const uncurryAdd = uncurry(curryAdd);
