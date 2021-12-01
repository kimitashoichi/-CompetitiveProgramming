// 問題URL
// https://atcoder.jp/contests/abc206/tasks/abc206_a

function maxiBuying(N: number) {
  const stablePrice = 206;
  const tax = 1.08;
  let judgePrice = Math.floor(N * tax);

  if (judgePrice === stablePrice) {
    console.log("so-so");
  } else if (judgePrice < stablePrice) {
    console.log("Yay!");
  } else {
    console.log(":(");
  }
}

maxiBuying(180); // Yay!

maxiBuying(200); // :(

maxiBuying(191); // so-so
