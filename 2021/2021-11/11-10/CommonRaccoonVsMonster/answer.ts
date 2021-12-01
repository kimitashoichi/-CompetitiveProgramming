// 問題URL
// https://atcoder.jp/contests/abc153/tasks/abc153_b

function commonRaccoonVsMonster(H: number, N: number, attack: number[]) {
  let hp = H;
  const highAttacks = attack.sort((a, b) => {
    return b - a; 
  })

  for (let i = 0; i < highAttacks.length; i++) {
    hp -= highAttacks[i];
  }

  if (hp <= 0 ){
    console.log('Yes')
  } else {
    console.log('No')
  }
}

commonRaccoonVsMonster(10, 3, [4, 5, 6]); // Yes
commonRaccoonVsMonster(20, 3, [4, 5, 6]); // No
commonRaccoonVsMonster(210, 5, [31, 41, 59, 26, 53]); // Yes
commonRaccoonVsMonster(211, 5, [31, 41, 59, 26, 53]); // No