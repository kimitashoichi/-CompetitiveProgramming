// 問題URL
// https://atcoder.jp/contests/abc140/tasks/abc140_b


// N種類の料理を、A配列の順で食べる、Bが通常の満足度、Cが追加でもらえる満足度
function buffet(N: number, A: number[], B: number[], C: number[]) {
  let ans = 0;

  for (let i = 0; i < N; i++) {
    if (i === 0) {
      // 初回のループでは追加の満足度はもらえないので除外
      ans += B[A[i] - 1];
    } else {
      let before = A[i - 1];
      let current = A[i];
      if (current - before === 1) {
        ans += C[before - 1]
      }
      ans += B[current - 1];
    }
  }

  console.log(ans);
}

buffet(3, [3, 1, 2], [2, 5, 4], [3, 6]); // 14
buffet(4, [2, 3, 4, 1], [13, 5, 8, 24], [45, 9, 15]); // 74
buffet(2, [1, 2], [50, 50], [50]); // 150