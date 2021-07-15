// 問題URL
// https://atcoder.jp/contests/abc195/tasks/abc195_b

function manyOranges(A: number, B: number, W: number) {
  let patternA = 1e9;
  let patternB = 0;

  for (let i = 0; i <= 1000000; i++) {
    if (A*i<=1000*W && 1000*W<=B*i) {
      patternA = Math.min(patternA, i);
      patternB = Math.max(patternB, i);
    }
  }

  if(patternB === 0) {
    console.log("UNSATISFIABLE");
    return;
  }

  console.log(patternA, patternB)
}

manyOranges(100, 200, 2) // 10 20
manyOranges(120, 150, 2) // 14 16
manyOranges(300, 333, 1) // UNSATISFIABLE

// AからBの範囲がオレンジのとりうる重さの範囲
// A=xの時にB=yでちょうどになるかを全検索 => a
// B=iの時にA=jでちょうどになるかを全検索 => b
// aとbを比較して小さい方を先に出力する
