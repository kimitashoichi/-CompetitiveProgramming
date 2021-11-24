// 問題URL
// https://atcoder.jp/contests/abc148/tasks/abc148_c

const calcLeastCommonMultiple = (m: number, n: number) => {
  const g = (first: number, second: number) => second ? g(second, first % second) : first;
  return m * n / g(m, n)
}

console.log(calcLeastCommonMultiple(2, 3)); // 6
console.log(calcLeastCommonMultiple(123, 456)); // 18696
console.log(calcLeastCommonMultiple(100000, 99999)); // 9999900000