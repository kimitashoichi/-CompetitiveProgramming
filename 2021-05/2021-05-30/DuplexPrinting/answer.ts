// 問題URL
// https://atcoder.jp/contests/abc157/tasks/abc157_a

function countPageNumber (N: number) {
  let answer = 0;

  if (N % 2 === 0) {
    answer = N / 2;
    console.log(answer);
  } else {
    answer = Math.floor(N/2) + 1;
    console.log(answer);
  }
}

countPageNumber(5);
countPageNumber(2);
countPageNumber(100);