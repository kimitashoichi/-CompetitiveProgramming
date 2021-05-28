// 問題URL
// https://atcoder.jp/contests/abc088/tasks/abc088_a

// N ⇨ 合計金額 / A ⇨ 所持している1円玉の枚数
function jedgeSpecifiedAmount (N: number, A: number) {
  let target = N;

  // 500で引けるところまで引く
  while(true) {
    target -= 500;
    if (target - 500 < 0) {
      break;
    } else if (target - 500 === 0) {
      console.log("YES");
      break;
    }
  }

  // 500で0にならなかった場合、1円玉で払い切れるか判定
  // 残額より1円玉の数が多ければ払い切ることができる
  // そうでなければ払い切れない
  if (target <= A) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

jedgeSpecifiedAmount(2018, 218); // YES
jedgeSpecifiedAmount(2763, 0); // NO
jedgeSpecifiedAmount(37, 514); // YES