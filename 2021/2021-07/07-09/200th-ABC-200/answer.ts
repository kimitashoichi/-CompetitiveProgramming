// 問題URL
// https://atcoder.jp/contests/abc200/tasks/abc200_b

function twohandred(N: number, K: number) {
  const TWO_HANDRED_NUMBER = 200;
  const TWO_HANDRED_STRING = "200";

  let targetNumber = N;

  for (let i = 1; i <= K; i++) {
    if (targetNumber % TWO_HANDRED_NUMBER === 0) {
      targetNumber /= TWO_HANDRED_NUMBER;
    } else {
      let targetString = targetNumber.toString() + TWO_HANDRED_STRING;
      targetNumber = Number(targetString);
    }
  }

  console.log(targetNumber);
}

twohandred(2021, 4) // 50531
twohandred(40000, 2) // 1
twohandred(8691, 20) // 84875488281

