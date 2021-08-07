// 問題URL
// https://atcoder.jp/contests/abc187/tasks/abc187_b

interface Coordinate {
  x: number
  y: number
}


// 1. 組み合わせを計算
// 2. 傾きを計算
// 3. 傾きが -1 <= ans <= 1 であるかどうかの判定
// 4. 条件に合致した数を出力

function gentlePairs(N: number, points: Coordinate[]) {
  let answer = 0;

  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      let judge = (points[j].y - points[i].y) / (points[j].x - points[i].x);
      console.log(judge);
      if (judge >= -1 && judge <= 1) {
        answer += 1;
      }
    }
  }

  console.log(answer);
}

let q1: Coordinate[] = [
  {
    x: 0,
    y: 0
  },
  {
    x: 1,
    y: 2
  },
  {
    x: 2,
    y: 1
  },
]

gentlePairs(3, q1); 
