// 問題URL
// https://atcoder.jp/contests/abc204/tasks/abc204_b

function nuts(N: number, trees: number[]) {
  let answer = 0;
  const MUST = 10;
  for (let i = 0; i < trees.length; i++) {
    let getNuts = trees[i] - MUST;
    if (getNuts > 0) {
      answer += getNuts;
    }
  }

  console.log(answer);
}

nuts(3, [6, 17, 28]); // 25
nuts(4, [8, 9, 10, 11]); // 1