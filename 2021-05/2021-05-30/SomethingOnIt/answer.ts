// 問題URL
// https://atcoder.jp/contests/abc095/tasks/abc095_a

function calculationOfTotalAmount (S: string) {
  const standard = 700;
  let addCount = 0;

  let addOrder = S.split("");
  if (addOrder[0] === "o") addCount++;
  if (addOrder[1] === "o") addCount++;
  if (addOrder[2] === "o") addCount++;

  // 合計金額の出力
  console.log(standard + (addCount * 100));
}

calculationOfTotalAmount("oxo"); // 900
calculationOfTotalAmount("ooo"); // 1000
calculationOfTotalAmount("xxx"); // 700