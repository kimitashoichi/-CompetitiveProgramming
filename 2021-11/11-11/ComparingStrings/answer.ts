// 問題URL
// https://atcoder.jp/contests/abc152/tasks/abc152_b

function comparingStrings(a: number, b: number) {
  const aString = a.toString();
  const bString = b.toString();
  const targetA = new Array(b).fill(aString).join('');
  const targetB = new Array(a).fill(bString).join('');
  const compareArr = [targetA, targetB].sort();
  console.log(compareArr[0]);

}

comparingStrings(4, 3); // 3333
comparingStrings(7, 7); // 7777777