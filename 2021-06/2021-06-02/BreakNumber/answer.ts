// 問題URL
// https://atcoder.jp/contests/abc068/tasks/abc068_b


// 通常の解き方とは少し違う
// 100以下の整数で２で割り切れる数は２の乗数である
// つまり[1, 2, 4, 8, 16, 32, 64]のうちのどれかが答え
// 与えられた数値以下で答えのリストから一番大きいものを出力すればそれが答えになる

// 通常の解き方
// 全検索して一番２で割れる数が多いものを出力
function saerchNumber(N: number): void {
  const answers = [1, 2, 4, 8, 16, 32, 64];
  let answerList = answers.filter((val) => N >= val);
  answerList.sort(function(a, b){return b - a});
  console.log(answerList[0]);
}

saerchNumber(7);
saerchNumber(32);
saerchNumber(1);
saerchNumber(100);
