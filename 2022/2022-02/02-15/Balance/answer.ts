// 問題URL
// https://atcoder.jp/contests/abc129/tasks/abc129_b

// 配列Wを前から順に足し合わせて全検索する
// 絶対値の最小値を保存しておく
// ループが終了した時点での最小値を出力する


const qOne = [1, 2, 3];
const qTwo = [1, 3, 1, 1];
const qThree = [27, 23, 76, 2, 3, 5, 62, 52]

function balance (N: number, W: number[]) {
  let min = 0;
  const targetArray = W;

  for (let i = 1; i < W.length; i++) {
    const first = [...targetArray].slice(0, i);
    const second = [...targetArray].slice(i, W.length);

    const firstTotal = first.reduce((total, current) => total + current);
    const secondTotal = second.reduce((total, current) => total + current);

    const abs = Math.abs(firstTotal - secondTotal);
    if (i === 1) {
      min = abs;
    } else if (min > abs) {
      min = abs;
    }
  }

  console.log(min);
}

balance(3, qOne); // 0
balance(4, qTwo); // 2
balance(8, qThree); // 2