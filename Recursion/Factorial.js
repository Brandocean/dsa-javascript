function factorial(n) {
    if(n === 1) return 1
    return n * factorial(n-1)
}


let result = factorial(4);
console.log(result);