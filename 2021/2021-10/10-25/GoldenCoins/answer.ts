// 問題URL
// https://atcoder.jp/contests/abc160/tasks/abc160_b

function goldenCoins(X: number) {
  let money = X;

  // 500円玉の喜び
  const remainderFivehand = X % 500;
  const happyForFivehandred = (X - remainderFivehand) / 500 * 1000;
  money = remainderFivehand;

  // 5円玉の喜び
  const remainderFive = remainderFivehand % 5;
  const happyForFive = (remainderFivehand - remainderFive) / 5 * 5;

  console.log(happyForFivehandred + happyForFive);
}

goldenCoins(1024); // 2020
goldenCoins(0); // 0
goldenCoins(1000000000); // 2000000000