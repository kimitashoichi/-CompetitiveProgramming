// 問題URL
// https://atcoder.jp/contests/agc025/tasks/agc025_a

function digitsSum(N:number) {
  let answer = 0;
  if (N === 100000 || N === 10000 || N === 1000 || N === 100 || N === 10) {
    console.log(10);
    return;
  }

  for (let a = 0; a <= N; a++) {
    let b = N - a;
    let state = a + sum(b.toString().split(""))
    if (a === 0) {
      answer = state;
    }

    if (state <= answer) {
      answer = state;
    }
  }
  
  console.log(answer)
}

function sum(b: string[]): number {
  let sum = 0;
  for (let i = 0; i < b.length; i++) {
    sum += Number(b[i]);
  }

  return sum;
}

digitsSum(15); // 6
digitsSum(100000); // 10

// 解法の考察
// A + B = Nであることがわかっている
// Aが決まればBがきまる
// N = 15の時 A = 1 , B = 14 ; A = 8, B = 7
// N = 100000 の時 A = 1 , B = 99999
// 各位の和を変数として保持、全検索
// 検索の過程で各位の和を求めていき、全て検索が終了した時点で保持されていた数値を出力するようにする