// 問題URL
// https://atcoder.jp/contests/abc179/tasks/abc179_a

function pluralForm(S: string) {
  const lastString = S.slice(-1);
  if (lastString === 's') {
    console.log(S + 'es');
  } else {
    console.log(S + 's');
  }
}

pluralForm('apple');
pluralForm('bus');
pluralForm('box');