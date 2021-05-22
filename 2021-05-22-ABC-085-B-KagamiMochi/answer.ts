// 【問題概要】
// N 個の整数 d[0],d[1],…,d[N−1] が与えられます。
// この中に何種類の異なる値があるでしょうか？
// (原問題文をかなり意訳していますが、題意はこういうことです)

// 【制約】
// 1≤N≤100
// 1≤d[i]≤100
// 入力値はすべて整数
// 【数値例】
// 1)
// N=4
// d=(8,10,8,6)
// 答え: 3
// 6, 8, 10 の 3 種類です。
// 問題URL
// https://atcoder.jp/contests/abc085/tasks/abc085_b


// バケット法と言われる手法
function countDifferentValues (N: number, d: number[]): number {
  // 配列が取りうる数の範囲＋１の配列を作成
  let num: number[] = new Array<number>(101)
  let ans = 0;

  // 入力される数値の配列の各要素を初めに作成した配列のindex番号として、その値を１に変更する
  for (let i = 0; i < N; i++) {
    num[d[i]] = 1;
  }

  // 最初に作成した配列の各要素の和が入力された数値の種類数になる
  for (let i = 0; i < 100; i++) {
    // 作成した配列で値が入っていない場合はundefinedになり、単純に全ての要素の和を求めるとNaNになってしまうので判定する
    if (num[i] !== undefined) {
      ans += num[i];
    }
  }

  console.log(ans);
  return ans;
}

countDifferentValues(4, [8,10,8,6]);