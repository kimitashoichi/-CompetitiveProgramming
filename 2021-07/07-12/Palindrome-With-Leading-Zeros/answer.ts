// 問題URL
// https://atcoder.jp/contests/abc198/tasks/abc198_b

function palindromeWithLeadingZeros(N: number) {
  const original = N;
  let caseOne = Number(N.toString().split("").reverse().join(""));
  let caseTwo = N.toString().split("");
  const caseTwoLength = caseTwo.length;

  // 条件１＝＞与えられた引数が元から回文だった場合はそのままでOK
  if(original === caseOne) {
    console.log("YES");
    return;
  }

  // 条件２＝＞与えられた引数が０で終わっていなければ回文にすることは不可能
  if (caseTwo[caseTwoLength - 1] !== "0") {
    console.log("NO");
    return;
  } else {
    console.log("YES");
    return;
  }
}

palindromeWithLeadingZeros(1210) // YES
palindromeWithLeadingZeros(777); // YES
palindromeWithLeadingZeros(123456789) // NO
