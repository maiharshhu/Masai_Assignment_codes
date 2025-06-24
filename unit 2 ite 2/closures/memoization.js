function memoize(fn, limit = 5) {
  const cache = new Map();

  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn(...args);
    cache.set(key, result);

    if (cache.size > limit) {
      const firstKey = cache.keys().next().value;
      cache.delete(firstKey);
    }

    return result;
  };
}


const slowAdd = (a, b) => {
  console.log("Calculating...");
  return a + b;
};
const memoAdd = memoize(slowAdd);

console.log(memoAdd(2, 3)); 
console.log(memoAdd(2, 3)); 
