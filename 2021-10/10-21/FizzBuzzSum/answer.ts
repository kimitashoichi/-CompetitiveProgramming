// 問題URL
// https://atcoder.jp/contests/abc162/tasks/abc162_b

function fizzBuzzSum (N: number) {
  let answer = 0;

  for (let i = 1; i <= N; i++) {
    if (i % 3 !== 0 && i % 5 !== 0) {
      answer += i;
    } 
  }

  console.log(answer);
}

fizzBuzzSum(15); // 60;
fizzBuzzSum(1000000); // 266666333332