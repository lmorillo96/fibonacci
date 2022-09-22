function fibonacci(num) {
  let i;
  let fib = [1, 0];

  for (i = 2; i <= num; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    console.log(fib[i]);
  }
}

fibonacci(7);
