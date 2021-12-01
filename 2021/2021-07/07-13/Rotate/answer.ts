// 問題URL
// https://atcoder.jp/contests/abc197/tasks/abc197_a

function rotate(S: string) {
  let revers = S.split("");
  const answer = revers[1] + revers[2] + revers[0];
  console.log(answer);
}

rotate("abc"); // bca
rotate("aab"); // aba