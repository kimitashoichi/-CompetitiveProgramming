// 問題URL
// https://atcoder.jp/contests/abc105/tasks/abc105_b

function CakeAandDonuts(N: number): void {
  const cake = 4;
  const donuts = 7;

  // ケーキよりも安い合計金額の場合は条件に合わないので最初に省く
  if (N < cake) {
    console.log("NO");
    return;
  }

  // 全検索
  for (let i = 0; i <= N; i++) {
    for (let j = 0; j <= N; j++) {
      // ケーキとドーナツの個数
      if (i * cake + j * donuts === N) {
        console.log("YES");
      }
    }
  }
}

CakeAandDonuts(11);
CakeAandDonuts(40);
CakeAandDonuts(3);