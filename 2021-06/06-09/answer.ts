// 問題URL
// https://atcoder.jp/contests/abc072/tasks/abc072_b

function oddString(S: string): void {
  // 文字列を分割して配列に変換
  let targetArray = S.split("");

  // 配列のindex番号が偶数のものだけ新しい配列にする
  // 問題は奇数番目の文字を組み合わせることだが、index番号だと0から始まるため、index番号が偶数のものを取り出すと奇数番目の文字を組み合わせることと同じになる
  let answerArray = targetArray.filter(val => targetArray.indexOf(val) % 2 === 0);

  // 配列を文字列に変換
  let oddString = answerArray.join("");
  console.log(oddString);
}

oddString("atcoder"); // acdr
oddString("aaaa"); // aa
oddString("z"); // z
oddString("fukuokayamaguchi"); // fkoaaauh