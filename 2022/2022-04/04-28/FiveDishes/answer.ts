// 問題URL
// https://atcoder.jp/contests/abc123/tasks/abc123_b
// TODO:完全に回答できなかった

function FiveDishes (menu: number[]) {
  let totalTime = 0;

  const judge = (total: number): number => {
    const covertStrings = total.toString().slice();
    const targetNumber = Number(covertStrings[covertStrings.length - 1]);
    const TEN = 10;
    return TEN - targetNumber;
  };

  for (let i = 0; i < menu.length; i++) {
    let first = menu[i];
    totalTime += first;
    if (i !== menu.length - 1) {
      totalTime += judge(totalTime);
    }
  }

  console.log(totalTime);
}

FiveDishes([29,20,7,35,120]); // 215
FiveDishes([123,123,123,123,123]); // 643