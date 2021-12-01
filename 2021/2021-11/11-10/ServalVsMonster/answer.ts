// 問題URL
// https://atcoder.jp/contests/abc153/tasks/abc153_a

function servalVsMonster(H: number, A: number) {
  let ans = 0;
  let hp = H;
  const attack = A;

  while (hp >= 0) {
    if (hp <= 0) break;
    hp -= attack;
    ans++;
  }
  console.log(ans)
}

servalVsMonster(10, 4); // 3
servalVsMonster(1, 10000); // 1
servalVsMonster(10000, 1); // 10000
