// 問題URL
// https://atcoder.jp/contests/abc124/tasks/abc124_b

// 以下２つの条件を満たす個数を出力する
// 1,対象となる山の高さが今までの山以上の高さであること
// 2,対象となる山の高さが前の山以上の高さであること

function GreatOceanView (N: number, H: number[]) {
  let ans = 1;

  // 条件1
  const totalBefore = (tagetArr: number[], current: number) => {
    const max = Math.max(...tagetArr);
    return max <= current ? true: false;
  }

  // 条件2
  const immediatelyBefore = (prev: number, current: number) => {
    return prev <= current ? true: false;
  }

  for (let i = 2; i <= H.length + 1; i++) {
    let beforeArray = [...H].slice(0, i);
    let before =  H[i - 2];
    let current = H[i - 1];

    const flagA = totalBefore(beforeArray, current);
    const flagB = immediatelyBefore(before, current);

    if (flagA && flagB) ans++;
  }

  console.log(ans);
}

GreatOceanView(4, [6, 5, 6, 8]); // 3
GreatOceanView(5, [4, 5, 3, 5, 4]); // 3
GreatOceanView(5, [9, 5, 6, 8, 4]); // 1