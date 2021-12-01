// 問題URL
// https://atcoder.jp/contests/abc053/tasks/abc053_b

function aToZString(S: string): void {
  // 配列変換
  let searchAStrings = S.split("");

  // 逆順にして配列変換
  // ⇨ Zが重複して存在する場合、一番最後のZの位置を知りたいから配列を逆順にして検索
  let searchZStrings = S.split("").reverse();
  const strignLenght = searchAStrings.length;

  let aNumber = searchAStrings.indexOf("A");
  let zNumber = searchZStrings.indexOf("Z");

  // 配列全体の長さから逆順にした時のZのindex番号を引くことで正しい順序の配列のZのindex番号を出せる
  const zPosition = strignLenght - zNumber;

  const answer = zPosition - aNumber;
  console.log(answer);

}

aToZString("QWERTYASDFZXCV"); // 5
aToZString("ZABCZ"); // 4
aToZString("HASFJGHOGAKZZFEGA"); // 12