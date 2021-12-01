// 問題URL
// https://atcoder.jp/contests/abc157/tasks/abc157_a

function duplexPrinting(N: number) {
  const pages = Math.floor(N / 2) + (N % 2);
  console.log(pages);
}

duplexPrinting(5)
duplexPrinting(2)
duplexPrinting(100)