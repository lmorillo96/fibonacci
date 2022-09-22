function fibonacci(num) {
  fibArray = [];

  let i;
  let fib = [1, 0];

  for (i = 2; i <= num; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    fibArray.push(fib[i]);
  }
}

fibonacci(7);
console.log(fibArray);
