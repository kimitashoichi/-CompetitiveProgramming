// https://atcoder.jp/contests/abc118/tasks/abc118_b

function answer(N: number, M: number, Qtargets: number[][]) {
  // 箱を作る
  let obj = {};
  for (let i = 1; i <= M; i++) {
    obj[i] = 0;
  }

  for (let i = 0; i < Qtargets.length; i++) {
    for (let j = 1; j < Qtargets[i].length; j++) {
      let key = Qtargets[i][j].toString();
      obj[key] += 1;
    }
  }

  const taegets = Object.values(obj).filter(value =>  value === N);
  if (N === 1) {
    console.log(Qtargets[0][0]);
  } else {
    console.log(taegets.length);
  }
}

const q1 = [
  [2, 1, 3],
  [3, 1, 2, 3],
  [2, 3, 2]
];

const q2 = [
  [4, 2, 3, 4, 5],
  [4, 1, 3, 4, 5],
  [4, 1, 2, 4, 5],
  [4, 1, 2, 3, 5],
  [4, 1, 2, 3, 4],
];

const q3 = [
  [3, 5, 10, 30],
]

answer(3, 4, q1); // 1
answer(5, 5, q2); // 0
answer(1, 30, q3); // 3