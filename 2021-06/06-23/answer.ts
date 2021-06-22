// 問題URL
// https://atcoder.jp/contests/abc042/tasks/abc042_b

function stringArray(N: string[], K: string[], T: string[]) {
  let n = N.sort(asc).join("");
  let k = K.sort(asc).join("");
  let t = T.sort(asc).join("");

  let answer = n + k + t;
  console.log(answer);
}

function asc(a, b) {
  return a - b;
}

stringArray(["d","x","x"],["a","x","x"],["c","x","x"]);

// abc, bcd, abd
// それぞれの配列をソートする