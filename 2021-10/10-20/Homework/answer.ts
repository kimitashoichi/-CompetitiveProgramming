// 問題URL
// https://atcoder.jp/contests/abc163/tasks/abc163_b

function homework(N: number, M: number, works: number[]) {
  for (let work of works) {
    N -= work;
    if (N < 0) {
      break;
    }
  }

  if (N < 0) {
    console.log(-1);
  } else {
    console.log(N);
  }
}

homework(41, 2, [5, 6]); // 30
homework(10, 2, [5, 6]); // -1
homework(11, 2, [5, 6]); // 0
homework(314, 15, [9, 26, 5, 35, 8, 9, 79, 3, 23, 8, 46, 2, 6, 43, 3]); // 9