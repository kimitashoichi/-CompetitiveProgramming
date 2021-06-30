// 問題URL
// https://atcoder.jp/contests/abc204/tasks/abc204_a

function rockPaperScissors(x: number, y: number) {
  const total = 3;

  if (x === y) {
    console.log(x);
    return;
  } else {
    console.log(total - (x+y))
  }
}

rockPaperScissors(0, 1) // 2
rockPaperScissors(0, 0) // 0

// あいこになる場合は
// 1 全ての数値が同じ
// 2 全てのお数値が異なる
// の２パターン
// 問題の制約で答えは一意に定まるのでどちらかのパターンにあてはまる