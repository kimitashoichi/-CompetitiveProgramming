// 問題URL
// https://atcoder.jp/contests/abc149/tasks/abc149_b

function greedyTakahashiPatternA(A: number, B: number, K:number) {
  let takahashi = A;
  let aoki = B;

  for (let i = 1; i <= K; i++) {
    if (takahashi >= 1) {
      takahashi--;
      continue;
    }
    if (aoki >= 1) {
      aoki--;
      continue;
    }
  }

  console.log(takahashi, aoki);
}

// greedyTakahashiPatternA(2, 3, 3); // 0 2
// // この数の多さだと計算し切れない
// greedyTakahashiPatternA(500000000000, 500000000000, 1000000000000); // 0 0

// 加減のみ
function greedyTakahashiPatternB(A: number, B: number, K:number) {
  let takahashi = A;
  let aoki = B;
  let remainder = K;

  if ((remainder - takahashi) >= 0) {
    takahashi = 0;
    remainder -= A;
  } else {
    takahashi -= remainder;
    remainder -= A;
  }

  if (remainder - aoki >= 0) {
    aoki = 0;
  } else {
    aoki -= remainder;
  }

  console.log(takahashi, aoki);
}

greedyTakahashiPatternB(2, 3, 3); // 0 2
// 計算し切ることができる
greedyTakahashiPatternB(500000000000, 500000000000, 1000000000000); // 0 0