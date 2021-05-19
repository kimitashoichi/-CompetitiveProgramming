// 【問題概要】
// 500 円玉を A 枚、100 円玉を B 枚、50 円玉を C 枚持っています。
// これらの硬貨の中から何枚かを選び、合計金額をちょうど X 円にする方法は何通りあるでしょうか？

// 【制約】
// 0 ≤ A,B,C ≤ 50
// A + B + C ≥ 1
// 50 ≤ X ≤ 20000
// A,B,Cは整数である
// X は 50 の倍数である
// 【数値例】
// 1)
// A=2
// B=2
// C=2
// X=100
// 答え: 2
// 条件を満たす選び方は以下の 2 通りです。
// 500 円玉を 0 枚、100 円玉を 1 枚、50 円玉を 0 枚選ぶ
// 500 円玉を 0 枚、100 円玉を 0 枚、50 円玉を 2 枚選ぶ

// 問題URL
// https://atcoder.jp/contests/abc087/tasks/abc087_b

function combinationOfTotalAmount(a: number, b: number, c: number ,total: number): number {
  let answer = 0;

  // 全てのパターンを繰り返し試す
  for (let i = 0; i <= a; i++) {
    for (let j = 0; j <= b; j++) {
      for (let k = 0; k <= c; k++) {
        // 各パターンの合計金額を算出
        let amount = 500*i + 100*j + 50*k;

        // 合計金額が目的の金額と一致する場合にanswerの回数を加算する
        if (total === amount) answer++
      }
    }
  }

  console.log(answer);
  return answer;
}

combinationOfTotalAmount(2,2,2,100);