// 問題URL
// https://atcoder.jp/contests/abc190/tasks/abc190_a

function veryVeryPrimitiveGame(A: number, B: number, C: number) {
  // 順番によらずA < B ならBの勝利, B > A ならAの勝利
  if (A < B) {
    console.log('Aoki');
    return;
  } else if (A > B) {
    console.log('Takahashi');
    return;
  }

  // 同じ個数の場合は後攻が勝利する
  if (C === 1) {
    console.log('Takahashi');
    return;
  } else {
    console.log('Aoki');
    return;
  }
}

veryVeryPrimitiveGame(2, 1, 0) // Takahashi
veryVeryPrimitiveGame(2, 2, 0) // Aoki
veryVeryPrimitiveGame(2, 2, 1) // Takahashi