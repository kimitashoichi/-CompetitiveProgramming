// 問題URL
// https://atcoder.jp/contests/abc157/tasks/abc157_b

function bingo(bingo: number[][], N: number, numbers: number[]) {
  let bingoCard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

  for (let i = 0; i < N; i++) {
    let target = numbers[i];
    for (let j = 0; j <= 2; j++) {
      for (let k = 0; k <= 2; k++) {
        if (bingo[j][k] === target) {
          bingoCard[j][k] = 1;
        }
      }
    }
  }

  // 斜めで揃っている場合
  const PATTERN_B = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
  const PATTERN_C = [[0, 0, 1], [0, 1, 0], [1, 0, 0]];

  let yokoFlag;
  for (let i = 0; i <= 2; i++) {
    // 横一列が揃っている場合
    yokoFlag = bingoCard[i].every((value) => value === 1);
  }

  let tate = [0, 0, 0];
  for (let i = 0; i <= 2; i++) {
    if (bingoCard[i][0] === 1) {
      tate[i] = 1;
    }
  }
  const tateFlag = tate.every((value) => value === 1);

  let naname = [0, 0, 0];
  for (let i = 0; i <= 2; i++) {
    if (i === 0 && bingoCard[i][2] === 1) {
      naname[i] = 1;
    }
    if (i === 1 && bingoCard[i][1] === 1) {
      naname[i] = 1;
    }
    if (i === 2 && bingoCard[i][0] === 1) {
      naname[i] = 1;
    }

    if (i === 0 && bingoCard[i][0] === 1) {
      naname[i] = 1;
    }
    if (i === 1 && bingoCard[i][1] === 1) {
      naname[i] = 1;
    }
    if (i === 2 && bingoCard[i][2] === 1) {
      naname[i] = 1;
    }
  }
  const nanameFlag = naname.every((value) => value === 1);

  if (yokoFlag || tateFlag || nanameFlag) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}


bingo([[84, 97, 66], [79, 89, 11], [61, 59, 7]], 7, [7, 89, 7, 87, 79, 24, 84, 30]);