let counter = 0;

// BigO(2^N)
function fib(n) {
    counter++;
    if(n === 0 || n === 1) return n;
    return fib(n - 1) + fib(n - 2);
}

const n = 20;

console.log(`\nFib of ${n} = ${fib(n)}`);
console.log(`\nCounter: ${counter}`);