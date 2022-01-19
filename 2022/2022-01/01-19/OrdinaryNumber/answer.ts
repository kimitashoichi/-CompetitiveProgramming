// 問題URL
// https://atcoder.jp/contests/abc132/tasks/abc132_b

// 数列を前から順に３つづつ取り出す
// ２番目の要素が３つの中で２番目に小さいか確認
// 条件に当てはまる場合はカウントを１つ増やす

function ordinaryNumber(n: number, p: number[]) {
  let ans = 0;
  let startIndex = 0;

  const desc = (a, b) => {
    return a - b;
  }

  for (let i = 3; i <= p.length; i++) {
    const targetArray = p.slice(startIndex, i);
    const sortArray = targetArray.slice().sort(desc);
    if (targetArray[1] === sortArray[1]) {
      ans++;
    }
    startIndex++;
  }

  console.log(ans);
}

ordinaryNumber(5, [1, 3, 5, 4, 2]); // 2
ordinaryNumber(9, [9, 6, 3, 2, 5, 8, 7, 4, 1]); // 5