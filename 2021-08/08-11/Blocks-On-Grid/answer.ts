// 問題URL
// https://atcoder.jp/contests/abc186/tasks/abc186_b

// 1. 与えられた数値の配列の中で最小値を見つける
// 2. 最小値に合わせるように他の配列も合わせる
// 3. この時に最小値から引いた数を答えとして出力する

const one = [
  [2, 2, 3],
  [3, 2, 2]
];

const two = [
  [99, 99, 99],
  [99, 0, 99],
  [99, 99, 99]
];

const three = [
  [4, 4],
  [4, 4],
  [4, 4],
  [4, 4],
];

function blocksOnGrid(H: number, W: number, A: number[][]): void {
  let ans = 0;
  let min = 0;

  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      let targetValue = A[i][j];
      if (i !== 0 && j !== 0) {
        min = targetValue >= min ? min : targetValue;
      } else if (i === 0 && j === 0) {
        min = A[i][j];
      }
    }
  }

  A.forEach((numArr: number[]) => {
    numArr.forEach((value: number) => {
      if (value !== min) {
        ans += Math.abs(value - min);
      }
    })
  })

  console.log(ans)
}

blocksOnGrid(2, 3, one);  // 2
blocksOnGrid(3, 3, two);  // 792
blocksOnGrid(3, 2, three);  // 0