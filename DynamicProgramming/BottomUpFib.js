let counter = 0;

// BigO(N)
function fib(n) {
    counter++;
    fibArray = [];
    fibArray[0] = 0;
    fibArray[1] = 1;

    for(let index = 2; index <= n; index++){
        fibArray[index] = fibArray[index-1] + fibArray[index-2];
    }

    return fibArray[n];
}

const n = 20;

console.log(`\nFib of ${n} = ${fib(n)}`);
console.log(`\nCounter: ${counter}`);