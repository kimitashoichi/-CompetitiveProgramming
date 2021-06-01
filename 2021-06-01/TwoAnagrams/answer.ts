// 問題URL
// https://atcoder.jp/contests/abc082/tasks/abc082_b

function judgeBeforeOrAfter(s: string, t: string) {
  let sdash = s.split("").sort().join("");
  let tdash = t.split("").reverse().join("");

  if (sdash < tdash) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

// 昇順（数値の場合sort関数の引数に渡す）
function compareDesc(a, b) {
  return a - b
}

// 降順（数値の場合sort関数の引数に渡す）
function compareAsc(a, b) {
  return b - a
}

judgeBeforeOrAfter("yx", "axy"); // Yes
judgeBeforeOrAfter("ratcode", "atlas"); // Yes
judgeBeforeOrAfter("cd", "abc"); // No
judgeBeforeOrAfter("w", "ww"); // Yes
judgeBeforeOrAfter("zzz", "zzz"); // No