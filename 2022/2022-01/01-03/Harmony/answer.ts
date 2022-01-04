// 問題URL
// https://atcoder.jp/contests/abc135/tasks/abc135_a

function harmony(A: number, B: number) {
  const average = (A + B) / 2;
  if ((Math.abs(A - average) === Math.abs(B - average)) && Number.isInteger(average)) {
    console.log(average);
  } else {
    console.log('IMPOSSIBLE');
  }
}

harmony(2, 16); // 9
harmony(0, 3); // IMPOSSIBLE
harmony(998244353, 99824435); // 549034394
