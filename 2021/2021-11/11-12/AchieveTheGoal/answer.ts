// 問題URL
// https://atcoder.jp/contests/abc151/tasks/abc151_b

function achieveTheGoal(N: number, K: number, M: number, A: number[]) {
  const totalScore = A.reduce((current, total) => total += current );
  const ans = (M * N) - totalScore;
  if (ans <= K && ans >= 0) {
    console.log(ans);
  } else if (ans <= 0) {
    console.log(0);
  } else {
    console.log(-1);
  }
}

// (total + x) / N = M
// (total + x) = M * N
// x = (M * N) - total

achieveTheGoal(5, 10, 7, [8, 10, 3, 6]); // 8
achieveTheGoal(4, 100, 60, [100, 100, 100]); // 0
achieveTheGoal(4, 100, 60, [0, 0, 0]); // -1