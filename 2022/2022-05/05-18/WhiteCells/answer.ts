// https://atcoder.jp/contests/abc121/tasks/abc121_a

function whiteCells (H: number, W: number, h: number, w: number) {
  let totalSquares = W * H;

  const paintedLines = W * h;
  const paintedColumns = (H * w) - (w * h);

  const answer = totalSquares - (paintedLines + paintedColumns);

  console.log(answer);
}

whiteCells(3, 2, 2, 1); // 1
whiteCells(5, 5, 2, 3); // 6
whiteCells(2, 4, 2, 4); // 0