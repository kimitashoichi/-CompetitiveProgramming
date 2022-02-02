// 問題URL
// https://atcoder.jp/contests/abc131/tasks/abc131_b

// 味の総和を配列になるように計算
// 配列の中から味が一番小さい数字を排除
// あたらに作成された配列の総和を計算し出力

function biteEating(N: number, L: number) {
  const tasteCalc = (taste: number) => {
    return L + taste - 1;
  };

  const asc = (a, b) => {
    return a - b;
  };

  let apples: number[] = [];
  for (let i = 1; i <= N; i++) {
    apples.push(i);
  }
  const tastes = apples.map(apple => tasteCalc(apple)).sort(asc);
  const originally = tastes.reduce((total, current) => total + current);

  let diff = 0;

  for (let i = 0; i < tastes.length; i++) {
    const removeArray = [...tastes];
    removeArray.splice(i, 1);
    const ans = removeArray.reduce((total, current) => total + current);
    const newDiff = Math.abs(Math.abs(originally) - Math.abs(ans));
    if (i === 0) {
      diff = newDiff;
    } else {
      diff = diff < newDiff ? diff : newDiff;
    }
  }

  if (originally < 0) {
    console.log(originally + diff);
  } else {
    console.log(originally - diff);
  }
}

biteEating(5, 2); // 18
biteEating(3, -1); // 0
biteEating(30, -50); // -1044