// 問題URL
// https://atcoder.jp/contests/abc202/tasks/abc202_a

function threeDice(a: number, b: number, c: number) {
  let dices = [a, b, c];
  let answer = 0;
  const SEVEN = 7;

  for (let i = 0; i < dices.length; i++) {
    answer += SEVEN - dices[i];
  }

  console.log(answer);
}

threeDice(1, 4, 3); // 13
threeDice(5, 6, 4); // 6