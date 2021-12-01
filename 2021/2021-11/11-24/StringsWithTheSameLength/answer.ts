// 問題URL
// https://atcoder.jp/contests/abc148/tasks/abc148_b

function stringsWithTheSameLength(N: number, S: string, T: string) {
  let target: string[] = [];
  const firstStrings = S.split('');
  const secondStrings = T.split('');

  for (let i = 0; i < N; i++) {
    target.push(firstStrings[i]);
    target.push(secondStrings[i]);
  }

  const ans = target.join('');
  console.log(ans);
}

stringsWithTheSameLength(2, 'ip', 'cc'); // icpc
stringsWithTheSameLength(8, 'hmhmnknk', 'uuuuuuuu'); // humuhumunukunuku
stringsWithTheSameLength(5, 'aaaaa', 'aaaaa'); // aaaaaaaaaa