// 問題URL
// https://atcoder.jp/contests/abc167/tasks/abc167_ac

function registration(S: string, T: string) {
  const targetLenght = S.length;
  const compareId = T.slice(0, targetLenght);
  if (S === compareId) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}

registration('chokudai', 'chokudaiz'); // Yes
registration('snuke', 'snekee'); // No
registration('a', 'aa'); // Yes

