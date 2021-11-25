// 問題URL
// https://atcoder.jp/contests/abc147/tasks/abc147_b

function palindromePhilia(S: string) {
  const normalOrder = S.split('');
  const reverseOrder = S.split('').reverse();
  const stringLength = S.length;
  let count = 0;

  for (let i = 0; i < stringLength; i++) {
    if (normalOrder[i] !== reverseOrder[i]) count++;
  }

  console.log(count / 2);
}

palindromePhilia('redcoder'); // 1
palindromePhilia('vvvvvv'); // 0
palindromePhilia('abcdabc'); // 2