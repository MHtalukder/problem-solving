var TimeLimitedCache = function() {
    this.cache = new Map()
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const currentTime = Date.now();
    const expireTime = currentTime + duration;

    const existing = this.cache.get(key);

    const existedAndValid = existing && existing.expireTime > currentTime;

    this.cache.set(key, { value, expireTime });

    return !!existedAndValid;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
      const currentTime = Date.now();
    const entry = this.cache.get(key);

    if (!entry || entry.expireTime <= currentTime) {
        // Key does not exist or is expired
        return -1;
    }

    return entry.value;

};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    const currentTime = Date.now();
    let count = 0;

    for (const [key, entry] of this.cache.entries()) {
        if (entry.expireTime > currentTime) {
            count++;
        }
    }

    return count;

};



let cache = new TimeLimitedCache();

console.log(cache.set(1, 42, 1000)); // false (নতুন key)
console.log(cache.get(1));           // 42 (expire হয়নি)
console.log(cache.count());          // 1 (একটা valid key আছে)

setTimeout(() => {
    console.log(cache.get(1));       // -1 (কারণ মেয়াদ শেষ)
    console.log(cache.count());      // 0
}, 1200);
