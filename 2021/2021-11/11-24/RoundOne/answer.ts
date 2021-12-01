// 問題URL
// https://atcoder.jp/contests/abc148/tasks/abc148_a

function roundOne(A: number, B: number) {
  const answers = [1, 2, 3];
  const ans = answers.filter((answer) => {
    if (answer !== A && answer !== B) {
      return answer;
    }
  });
  console.log(ans[0]);
}

roundOne(3, 1); // 2
roundOne(2, 1); // 3