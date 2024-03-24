class TimeLimitedCache {
  constructor() {
    this.cache = {}
  }
  set(key, value, duration) {
    const isExist = this.cache[key] !== undefined;
    if(isExist) {
      clearTimeout(this.cache[key].removal)
    }
    this.cache[key] = {value};
    this.cache[key].removal = setTimeout(() => delete this.cache[key], duration)
    return isExist
  }

  get(key) {
    return this.cache[key]?.value ?? -1
  }

  count() {
    return Object.keys(this.cache).length
  }
}

const cache = new TimeLimitedCache();

console.log(cache.set(1, 500, 45)); // false
console.log(cache.get(1));          // 500
console.log(cache.set(2, 600, 35)); // false
console.log(cache.get(2));          // 600
console.log(cache.count());         // 2
console.log(cache.set(2, 800, 25)); // true
console.log(cache.count());         // 1

