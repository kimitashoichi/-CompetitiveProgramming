// 問題URL
// https://atcoder.jp/contests/abc146/tasks/abc146_b

function rotn(N: number, S: string) {
  const strings = S.split('');
  const START_CHAR_CODE = 64;
  const MAX_CHAR_CODE = 90;
  let charCodes: number[] = [];

  for (let i = 0; i < strings.length; i++) {
    let code = strings[i].charCodeAt(0);
    code += N;
    if (code > MAX_CHAR_CODE) {
      let remainder = code - MAX_CHAR_CODE;
      code = START_CHAR_CODE + remainder;
    }

    charCodes.push(code);
  }

  const answer = charCodes.map(code => {
    return String.fromCharCode(code);
  })

  console.log(answer.join(''));
}


rotn(2, 'ABCXYZ'); // CDEZAB
rotn(0, 'ABCXYZ'); // ABCXYZ
rotn(13, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'); // NOPQRSTUVWXYZABCDEFGHIJKLM