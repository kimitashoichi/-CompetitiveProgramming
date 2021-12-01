// 問題URL
// https://atcoder.jp/contests/abc151/tasks/abc151_a

function nextAlphabet(C: string) {
  const firstCharCode = C.charCodeAt(0);
  const answerCharCode = firstCharCode + 1;
  console.log(String.fromCharCode(answerCharCode))
}

nextAlphabet('a'); // b
nextAlphabet('y'); // z
