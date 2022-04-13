// 問題URL
// https://atcoder.jp/contests/abc128/tasks/abc128_a


// A: りんごの数 P: りんごの欠片数
function applePie (A: number, P: number) {
  const CRUSHED_APPLE = 3;
  const PIE_INGREDIENTS = 2;

  const total = A * CRUSHED_APPLE + P;
  const numberOfApplePies = Math.floor(total / PIE_INGREDIENTS);

  console.log(numberOfApplePies);
}

applePie(1, 3); // 3
applePie(0, 1); // 0
applePie(32, 21); // 58