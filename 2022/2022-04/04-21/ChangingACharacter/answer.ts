// 問題URL
// https://atcoder.jp/contests/abc126/tasks/abc126_a

function changingACharacter (N: number, K: number, S: string) {
  let splitStrings = S.split('');
  splitStrings[K - 1] = splitStrings[K - 1].toLowerCase();
  console.log(splitStrings.join(''));
}

changingACharacter(3, 1, 'ABC');