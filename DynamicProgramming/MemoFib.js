let counter = 0;
let memo = [];

// BigO(N)
// 2N - 1 to calculate the number of calls
function fib(n) {
    counter++;
    if(memo[n] !== undefined) return memo[n];
    if(n === 0 || n === 1) return n;
    memo[n] = fib(n - 1) + fib(n - 2);
    return memo[n];
}

const n = 20;

console.log(`\nFib of ${n} = ${fib(n)}`);
console.log(`\nCounter: ${counter}`);