// 問題URL
// https://atcoder.jp/contests/abc178/tasks/abc178_b

function productMax(a: number, b: number, c: number, d: number) {
  const firstGroup = [a, b];
  const secondGroup = [c, d];
  let answers = [];

  for (let i = 0; i < firstGroup.length; i++) {
    for (let j = 0; j < secondGroup.length; j ++) {
      answers.push(firstGroup[i] * secondGroup[j]);
    }
  }

  const answer = Math.max(...answers);
  console.log(answer);
}

productMax(1, 2, 1, 1); // 2
productMax(3, 5, -4, -2); // -6-
productMax(-1000000000, 0, -1000000000, 0) // 1000000000000000000
