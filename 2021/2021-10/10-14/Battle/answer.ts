// 問題URL
// https://atcoder.jp/contests/abc164/tasks/abc164_b

function battle(A: number, B: number, C: number, D: number) {
  const takahashi = {hp: A, attack: B};
  const aoki = {hp: C, attack: D};
  let turn = true;

  while (true) {
    if (turn) {
      aoki.hp -= takahashi.attack;
      if (aoki.hp <= 0) {
        console.log('Yes');
        break;
      }
      turn = !turn;
    } else {
      takahashi.hp -= aoki.attack;
      if (takahashi.hp <= 0) {
        console.log('No');
        break;
      }
      turn = !turn;
    }
  } 
}

battle(10, 9, 10, 10); // No
battle(46, 4, 40, 5); // Yes