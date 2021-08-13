// 問題URL
// https://atcoder.jp/contests/abc185/tasks/abc185_c

// 0. 全て整数で12分割しなければならない
// 1. 長さが12の配列を作成し、引数から12を引く
// 1-2. この時引数が0になった場合は１通りだけ
// 2. 引数から12を引いた余りを配列にどの様に分割できるかどうかの数をカウントする

function duodecimFerra(L: number) {
  // 最低分割数
  const MIM_DIVISION = 12;
  // 配列の初期化
  let splitIrons = new Array(12).fill(1);
  if (L - MIM_DIVISION <= 0) {
    console.log(1);
    return;
  }

  let splitCount = 1;
  const splitRemainder = L - MIM_DIVISION;
  

}

duodecimFerra(1);