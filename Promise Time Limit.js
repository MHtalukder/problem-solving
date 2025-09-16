
const timeLimit = (fn, t) => {
    return async (...args) => {
        const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject("Time Limit Exceeded"), t));

        const fnPromise = fn(...args);

        return Promise.race([fnPromise, timeoutPromise]);
    }
}





const asyncTask = (n) => new Promise((resolve) => setTimeout(() => resolve(n), 2000));

const limited = timeLimit(asyncTask, 2001);

limited(5)
.then(console.log)
.catch(console.error)
