// 【問題概要】
// 二つの正整数 a, b が与えられます。 a と b の積が偶数か奇数か判定してください。
// 【制約】
// 1 ≤ a ,b ≤ 10000
// a, b は整数
// 【数値例】
// 1)
// a=3
// b=4
// 答え: Even
// 3 × 4 = 12 でこれは偶数なので、"Even" を出力します。

// 2)
// a=1
// b=21
// 答え: Odd
// 1 × 21 = 21 でこれは奇数なので、"Odd" を出力します。

// 問題URL
// https://atcoder.jp/contests/abc086/tasks/abc086_a

function judgeEvenOrOdd (a: number, b: number) :string {
  const targetNumber = a * b;
  if (targetNumber % 2 === 0) {
    console.log("Even");
    return "Even";
  } else if (targetNumber % 2 !== 0) {
    console.log("Odd");
    return "Odd";
  }
}

const a = 1;
const b = 21;

judgeEvenOrOdd(a, b);